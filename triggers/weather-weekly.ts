import { TriggerContextData, TriggerTypes } from "deno-slack-api/mod.ts";
import { SCHEDULE_FREQUENCY } from "deno-slack-api/typed-method-types/workflows/triggers/scheduled.ts";
import { Trigger } from "deno-slack-api/types.ts";
import { WeatherWeeklyWorkflow } from "../workflows/weather-weekly.ts";

const nextDayOfWeek = (dayOfWeek: number) => {
  const date = new Date();
  const offset = (dayOfWeek + 7 - date.getDay()) % 7;
  date.setDate(date.getDate() + (offset || 7));
  date.setHours(9, 0, 0, 0);

  return date;
};

const WeatherWeeklyTrigger: Trigger<typeof WeatherWeeklyWorkflow.definition> = {
  type: TriggerTypes.Scheduled,
  schedule: {
    start_time: nextDayOfWeek(0).toISOString(),
    timezone: "Asia/Tokyo",
    frequency: {
      type: SCHEDULE_FREQUENCY.Weekly,
    },
  },
  name: "Trigger WeatherWeekly workflow",
  workflow: `#/workflows/${WeatherWeeklyWorkflow.definition.callback_id}`,
  inputs: {
    channel_id: { value: TriggerContextData.Event.AppMentioned.channel_id },
  },
};

export default WeatherWeeklyTrigger;
