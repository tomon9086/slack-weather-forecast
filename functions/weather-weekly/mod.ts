import { DefineFunction, Schema, SlackFunction } from "deno-slack-sdk/mod.ts";
import AsciiTable, {
  AsciiAlign,
} from "https://deno.land/x/ascii_table@v0.1.0/mod.ts";
import { JmaForecastResponse } from "./types.ts";
import { Weather, weatherFromWeatherCode } from "./weather-codes.ts";

const AREA_CODE = "120000"; // 千葉県

export const WeatherWeeklyFunction = DefineFunction({
  callback_id: "weather_weekly_function",
  title: "Weather forecast for the week",
  source_file: "functions/weather-weekly/mod.ts",
  input_parameters: {
    properties: {},
    required: [],
  },
  output_parameters: {
    properties: {
      message: {
        type: Schema.types.string,
      },
      weather: {
        type: Schema.types.array,
        items: {
          type: Schema.types.string,
          enum: Object.values(Weather),
        },
      },
    },
    required: ["message", "weather"],
  },
});

export default SlackFunction(
  WeatherWeeklyFunction,
  async () => {
    const response = await fetch(
      `https://www.jma.go.jp/bosai/forecast/data/forecast/${AREA_CODE}.json`,
    );
    const data: JmaForecastResponse = await response.json();
    const weeklyData = data[1];
    const timeSeries = weeklyData.timeSeries[0];
    const dates = timeSeries.timeDefines.map((timeDefine) =>
      new Date(timeDefine)
    );
    const weather = timeSeries.areas[0].weatherCodes.map(
      weatherFromWeatherCode,
    );
    const table = new AsciiTable()
      .setHeadingAlign(AsciiAlign.CENTER)
      .setHeading(
        dates.map((date) => date.toLocaleString("en-US", { weekday: "short" })),
      )
      .addRow(weather.map((w) => Weather[w]));

    const message = "```\n" +
      table.toString() +
      "\n```";

    return {
      outputs: { message, weather },
    };
  },
);
