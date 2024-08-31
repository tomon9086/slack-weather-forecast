import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";
import { WeatherWeeklyFunction } from "../functions/weather-weekly/mod.ts";

export const WeatherWeeklyWorkflow = DefineWorkflow({
  callback_id: "weather_weekly_workflow",
  title: "Weather Forecast Weekly Workflow",
  input_parameters: {
    properties: {
      channel_id: {
        type: Schema.slack.types.channel_id,
      },
    },
    required: ["channel_id"],
  },
});

const weatherForecast = WeatherWeeklyWorkflow.addStep(
  WeatherWeeklyFunction,
  {},
);

WeatherWeeklyWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: WeatherWeeklyWorkflow.inputs.channel_id,
  message: weatherForecast.outputs.message,
});
