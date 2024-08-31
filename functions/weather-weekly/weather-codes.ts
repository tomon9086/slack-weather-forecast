export enum Weather {
  sunny = "sunny",
  cloudy = "cloudy",
  rainy = "rainy",
  snowy = "snowy",
  unknown = "unknown",
}

export const weatherFromWeatherCode = (code: string): Weather => {
  switch (code) {
    case "100": // 晴れ
    case "101": // 晴れ時々くもり
    case "102": // 晴れ一時雨
    case "103": // 晴れ時々雨
    case "104": // 晴れ一時雪
    case "105": // 晴れ時々雪
    case "106": // 晴れ一時雨か雪
    case "107": // 晴れ時々雨か雪
    case "108": // 晴れ一時雨か雷雨
    case "110": // 晴れのち時々くもり
    case "111": // 晴れのちくもり
    case "112": // 晴れのち一時雨
    case "113": // 晴れのち時々雨
    case "114": // 晴れのち雨
    case "115": // 晴れのち一時雪
    case "116": // 晴れのち時々雪
    case "117": // 晴れのち雪
    case "118": // 晴れのち雨か雪
    case "119": // 晴れのち雨か雷雨
    case "120": // 晴れ朝夕一時雨
    case "121": // 晴れ朝の内一時雨
    case "122": // 晴れ夕方一時雨
    case "123": // 晴れ山沿い雷雨
    case "124": // 晴れ山沿い雪
    case "125": // 晴れ午後は雷雨
    case "126": // 晴れ昼頃から雨
    case "127": // 晴れ夕方から雨
    case "128": // 晴れ夜は雨
    case "129": // 晴れ夜半から雨
    case "130": // 朝の内霧後晴れ
    case "131": // 晴れ明け方霧
    case "132": // 晴れ朝夕くもり
    case "140": // 晴れ時々雨で雷を伴う
    case "160": // 晴れ一時雪か雨
    case "170": // 晴れ時々雪か雨
    case "181": // 晴れのち雪か雨
      return Weather.sunny;
    case "200": // くもり
    case "201": // くもり時々晴
    case "202": // くもり一時雨
    case "203": // くもり時々雨
    case "204": // くもり一時雪
    case "205": // くもり時々雪
    case "206": // くもり一時雨か雪
    case "207": // くもり時々雨か雪
    case "208": // くもり一時雨か雷雨
    case "209": // 霧
    case "210": // くもりのち時々晴れ
    case "211": // くもりのち晴れ
    case "212": // くもりのち一時雨
    case "213": // くもりのち時々雨
    case "214": // くもりのち雨
    case "215": // くもりのち一時雪
    case "216": // くもりのち時々雪
    case "217": // くもりのち雪
    case "218": // くもりのち雨か雪
    case "219": // くもりのち雨か雷雨
    case "220": // くもり朝夕一時雨
    case "221": // くもり朝の内一時雨
    case "222": // くもり夕方一時雨
    case "223": // くもり日中時々晴れ
    case "224": // くもり昼頃から雨
    case "225": // くもり夕方から雨
    case "226": // くもり夜は雨
    case "227": // くもり夜半から雨
    case "228": // くもり昼頃から雪
    case "229": // くもり夕方から雪
    case "230": // くもり夜は雪
    case "231": // くもり海上海岸は霧か霧雨
    case "240": // くもり時々雨で雷を伴う
    case "250": // くもり時々雪で雷を伴う
    case "260": // くもり一時雪か雨
    case "270": // くもり時々雪か雨
    case "281": // くもりのち雪か雨
      return Weather.cloudy;
    case "300": // 雨
    case "301": // 雨時々晴れ
    case "302": // 雨時々止む
    case "303": // 雨時々雪
    case "304": // 雨か雪
    case "306": // 大雨
    case "307": // 風雨共に強い
    case "308": // 雨で暴風を伴う
    case "309": // 雨一時雪
    case "311": // 雨のち晴れ
    case "313": // 雨のちくもり
    case "314": // 雨のち時々雪
    case "315": // 雨のち雪
    case "316": // 雨か雪のち晴れ
    case "317": // 雨か雪のちくもり
    case "320": // 朝の内雨のち晴れ
    case "321": // 朝の内雨のちくもり
    case "322": // 雨朝晩一時雪
    case "323": // 雨昼頃から晴れ
    case "324": // 雨夕方から晴れ
    case "325": // 雨夜は晴
    case "326": // 雨夕方から雪
    case "327": // 雨夜は雪
    case "328": // 雨一時強く降る
    case "329": // 雨一時みぞれ
    case "340": // 雪か雨
    case "350": // 雨で雷を伴う
    case "361": // 雪か雨のち晴れ
    case "371": // 雪か雨のちくもり
      return Weather.rainy;
    case "400": // 雪
    case "401": // 雪時々晴れ
    case "402": // 雪時々止む
    case "403": // 雪時々雨
    case "405": // 大雪
    case "406": // 風雪強い
    case "407": // 暴風雪
    case "409": // 雪一時雨
    case "411": // 雪のち晴れ
    case "413": // 雪のちくもり
    case "414": // 雪のち雨
    case "420": // 朝の内雪のち晴れ
    case "421": // 朝の内雪のちくもり
    case "422": // 雪昼頃から雨
    case "423": // 雪夕方から雨
    case "424": // 雪夜半から雨
    case "425": // 雪一時強く降る
    case "426": // 雪のちみぞれ
    case "427": // 雪一時みぞれ
    case "450": // 雪で雷を伴う
      return Weather.snowy;
    case "700": // night_fair
    case "701": // night_fair st cloud
    case "702": // night_fair te rain
    case "703": // night_fair st rain
    case "704": // night_fair te snow
    case "705": // night_fair st snow
    case "706": // night_fair te rain_or_snow
    case "707": // night_fair st rain_or_snow
    case "708": // night_fair te rain_thunder
    case "710": // night_fair trst cloud
    case "711": // night_fair tr cloud
    case "712": // night_fair trst rain
    case "713": // night_fair trte rain
    case "714": // night_fair tr rain
    case "715": // night_fair trte snow
    case "716": // night_fair trst snow
    case "717": // night_fair tr snow
    case "718": // night_fair tr rain_or_snow
    case "719": // night_fair tr rain_thunder
    case "720": // night_fair te rain
    case "721": // night_fair te rain
    case "722": // night_fair te rain
    case "723": // night_fair
    case "724": // night_fair
    case "725": // night_fair tr rain_thunder
    case "726": // night_fair tr rain
    case "727": // night_fair tr rain
    case "728": // night_fair tr rain
    case "729": // night_fair tr rain
    case "730": // mist tr sun
    case "731": // night_fair tr mist
    case "732": // night_fair st cloud
    case "740": // night_fair st rain_thunder
    case "760": // night_fair te snow_or_rain
    case "770": // night_fair st snow_or_rain
    case "781": // night_fair tr snow_or_rain
    default:
      return Weather.unknown;
  }
};
