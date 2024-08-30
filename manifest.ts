import { Manifest } from "deno-slack-sdk/mod.ts";
import { PingWorkflow } from "./workflows/ping.ts";

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/future/manifest
 */
export default Manifest({
  name: "slack-weather-forecast",
  description: "A blank template for building Slack apps with Deno",
  icon: "assets/default_new_app_icon.png",
  functions: [],
  workflows: [PingWorkflow],
  outgoingDomains: [],
  botScopes: [
    "commands",
    "chat:write",
    "chat:write.public",
    "app_mentions:read",
  ],
});
