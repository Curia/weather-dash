import React from "react";
import { getIcon, getDateTime } from "@components/utils";

interface WeatherProps {
  id: boolean;
  main: string;
  description: string;
  icon: string;
}

interface CurrentConditionsProps {
  current: {
    temp: number;
    weather: Array<WeatherProps>;
  };
}

const WeatherCurrent: React.FC<CurrentConditionsProps> = ({ current }) => {
  const weather: WeatherProps = current.weather[0];
  const dateTime = getDateTime();
  return (
    <div className="w-full p-4">
      <div className="flex justify-end">
        <div className="w-1/2">
  <p className="leading-none text-9xl">{dateTime.time}<span className="text-6xl">{dateTime.period}</span></p>
          <p className="leading-none text-4xl mt-4">{dateTime.day.toLowerCase()}</p>
        </div>
        <div className="w-1/2 text-right">
          <p className="leading-none text-9xl">{Math.ceil(current.temp)}</p>
          <p className="leading-none text-4xl mt-4">{weather.description.toLowerCase()}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCurrent;
