// Icons
import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightAltCloudy,
  WiCloud,
  WiCloudy,
  WiDayShowers,
  WiNightAltShowers,
  WiDayRain,
  WiNightAltRain,
  WiDayThunderstorm,
  WiNightAltThunderstorm,
  WiDaySnow,
  WiNightAltSnow,
  WiDayFog,
  WiNightFog,
  WiAlien,
} from "react-icons/wi";

export const getWeekDay = (day: number) => {
  const weekday: Array<string> = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return weekday[day];
};

// https://stackoverflow.com/a/39466341/10925497
const ordinal = (n: number) =>
  [, "st", "nd", "rd"][(n % 100 >> 3) ^ 1 && n % 10] || "th";

export const getDateTime = () => {
  const today: Date = new Date();
  const hours: number = today.getHours() % 12;
  const minutes: string | number =
    today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
  const ampm = today.getHours() >= 12 ? "pm" : "am";

  return {
    time: `${hours}:${minutes} ${ampm}`,
    day: `${getWeekDay(today.getDay())} the ${today.getDate()}${ordinal(
      today.getDate()
    )}`,
  };
};

export const getIcon = (conditionCode: string) => {
  switch (conditionCode) {
    case "01d":
      return <WiDaySunny />;
    case "01n":
      return <WiNightClear />;
    case "02d":
      return <WiDayCloudy />;
    case "02n":
      return <WiNightAltCloudy />;
    case "03d":
      return <WiCloud />;
    case "03n":
      return <WiCloud />;
    case "04d":
      return <WiCloudy />;
    case "04n":
      return <WiCloudy />;
    case "09d":
      return <WiDayShowers />;
    case "09n":
      return <WiNightAltShowers />;
    case "10d":
      return <WiDayRain />;
    case "10n":
      return <WiNightAltRain />;
    case "11d":
      return <WiDayThunderstorm />;
    case "11n":
      return <WiNightAltThunderstorm />;
    case "13d":
      return <WiDaySnow />;
    case "13n":
      return <WiNightAltSnow />;
    case "50d":
      return <WiDayFog />;
    case "50n":
      return <WiNightFog />;
    default:
      return <WiAlien />;
  }
};
