type IsoDate = string;
type Area = {
  name: string;
  code: string;
};

type ThreeDayWeatherForecast = {
  publishingOffice: string;
  reportDatetime: IsoDate;
  timeSeries: [
    {
      timeDefines: IsoDate[];
      areas: {
        area: Area;
        weatherCodes: string[];
        weathers: string[];
        winds: string[];
        waves: string[];
      }[];
    },
    {
      timeDefines: IsoDate[];
      areas: {
        area: Area;
        pops: string[];
      }[];
    },
    {
      timeDefines: IsoDate[];
      areas: {
        area: Area;
        temps: string[];
      }[];
    },
  ];
};

type WeeklyWeatherForecast = {
  publishingOffice: string;
  reportDatetime: IsoDate;
  timeSeries: [
    {
      timeDefines: IsoDate[];
      areas: {
        area: Area;
        weatherCodes: string[];
        pops: string[];
        reliabilities: string[];
      }[];
    },
    {
      timeDefines: IsoDate[];
      areas: {
        area: Area;
        tempsMin: string[];
        tempsMinUpper: string[];
        tempsMinLower: string[];
        tempsMax: string[];
        tempsMaxUpper: string[];
        tempsMaxLower: string[];
      }[];
    },
  ];
  tempAverage: {
    areas: {
      area: Area;
      min: string;
      max: string;
    }[];
  };
  precipAverage: {
    areas: {
      area: Area;
      min: string;
      max: string;
    }[];
  };
};

export type JmaForecastResponse = [
  ThreeDayWeatherForecast,
  WeeklyWeatherForecast,
];
