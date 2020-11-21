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
export const getOrdinal = (n: number) =>
  [, "st", "nd", "rd"][(n % 100 >> 3) ^ 1 && n % 10] || "th";


export const getIcon = (conditionCode: string, inline: boolean) => {
  switch (conditionCode) {
    case "01d":
      return <WiDaySunny className={inline ? "inline" : null} />;
    case "01n":
      return <WiNightClear className={inline ? "inline" : null} />;
    case "02d":
      return <WiDayCloudy className={inline ? "inline" : null} />;
    case "02n":
      return <WiNightAltCloudy className={inline ? "inline" : null} />;
    case "03d":
      return <WiCloud className={inline ? "inline" : null} />;
    case "03n":
      return <WiCloud className={inline ? "inline" : null} />;
    case "04d":
      return <WiCloudy className={inline ? "inline" : null} />;
    case "04n":
      return <WiCloudy className={inline ? "inline" : null} />;
    case "09d":
      return <WiDayShowers className={inline ? "inline" : null} />;
    case "09n":
      return <WiNightAltShowers className={inline ? "inline" : null} />;
    case "10d":
      return <WiDayRain className={inline ? "inline" : null} />;
    case "10n":
      return <WiNightAltRain className={inline ? "inline" : null} />;
    case "11d":
      return <WiDayThunderstorm className={inline ? "inline" : null} />;
    case "11n":
      return <WiNightAltThunderstorm className={inline ? "inline" : null} />;
    case "13d":
      return <WiDaySnow className={inline ? "inline" : null} />;
    case "13n":
      return <WiNightAltSnow className={inline ? "inline" : null} />;
    case "50d":
      return <WiDayFog className={inline ? "inline" : null} />;
    case "50n":
      return <WiNightFog className={inline ? "inline" : null} />;
    default:
      return <WiAlien className={inline ? "inline" : null} />;
  }
};

// https://developers.google.com/web/updates/2019/12/nic79#wake-lock
// The wake lock sentinel.
let wakeLock = null;

// Function that attempts to request a wake lock.
export const requestWakeLock = async () => {
  try {
    wakeLock = await navigator.wakeLock.request("screen");
    wakeLock.addEventListener("release", () => {
      console.log("Wake Lock was released");
    });
    console.log("Wake Lock is active");
  } catch (err) {
    console.error(`${err.name}, ${err.message}`);
  }
};

// Function that attempts to release the wake lock.
export const releaseWakeLock = async () => {
  if (!wakeLock) {
    return;
  }
  try {
    await wakeLock.release();
    wakeLock = null;
  } catch (err) {
    console.error(`${err.name}, ${err.message}`);
  }
};
