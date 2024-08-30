import {
  TriggerContextData,
  TriggerEventTypes,
  TriggerTypes,
} from "deno-slack-api/mod.ts";
import { Trigger } from "deno-slack-api/types.ts";
import { PingWorkflow } from "../workflows/ping.ts";

const PingTrigger: Trigger<typeof PingWorkflow.definition> = {
  type: TriggerTypes.Event,
  name: "Trigger ping workflow",
  workflow: `#/workflows/${PingWorkflow.definition.callback_id}`,
  event: {
    event_type: TriggerEventTypes.AppMentioned,
    all_resources: true,
  },
  inputs: {
    channel_id: { value: TriggerContextData.Event.AppMentioned.channel_id },
    channel_type: { value: TriggerContextData.Event.AppMentioned.channel_type },
    channel_name: { value: TriggerContextData.Event.AppMentioned.channel_name },
    user_id: { value: TriggerContextData.Event.AppMentioned.user_id },
    text: { value: TriggerContextData.Event.AppMentioned.text },
  },
};

export default PingTrigger;
