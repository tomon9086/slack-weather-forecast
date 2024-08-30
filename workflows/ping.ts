import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";

export const PingWorkflow = DefineWorkflow({
  callback_id: "ping_workflow",
  title: "Ping",
  input_parameters: {
    properties: {
      channel_id: { type: Schema.slack.types.channel_id },
      channel_type: { type: Schema.types.string },
      channel_name: { type: Schema.types.string },
      user_id: { type: Schema.slack.types.user_id },
      text: { type: Schema.types.string },
    },
    required: ["user_id"],
  },
});

PingWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: PingWorkflow.inputs.channel_id,
  message: `<@${PingWorkflow.inputs.user_id}> pong!`,
});
