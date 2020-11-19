import React from "react";

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
  WiAlien
} from "react-icons/wi";

interface WeatherConditionsProps {
  current: {
    temp: number;
  };
  conditions: {
    id: boolean;
    main: string;
    description: string;
    icon: string;
  };
}

const getIcon: any = (conditionCode: string) => {
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

const WeatherConditions: React.FC<WeatherConditionsProps> = ({
  current,
  conditions,
}) => {
  return (
    <div className="flex flex-wrap items-center">
      <div className="flex-initial">
        <span className="text-9xl">{getIcon(conditions.icon)}</span>
        </div>
      <div className="flex-initial">
        <strong className="leading-none text-6xl block font-bold">
          {Math.ceil(current.temp)}ºC
        </strong>
        <b className="text-2xl block font-bold mt-4">{conditions.main}</b>
      </div>
    </div>
  );
};

export default WeatherConditions;
