import React from "react";
import useSWR from "swr";
import { getIcon, getOrdinal } from "@components/utils";

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

const DateTime: React.FC<{}> = ({}) => {
  const { data, error } = useSWR("/api/fetchTime", {
    refreshInterval: 30000,
  });
  if (error) return <div>Unable to retrieve time info</div>;
  return (
    <>
      {!data ? (
        <p>Loading</p>
      ) : (
        <>
          <p className="leading-none text-9xl">
            {data.timeFormatted}
            <span className="text-6xl">{data.ampm}</span>
          </p>
          <p className="leading-none text-4xl mt-4">
            {`${data.day}  the ${data.date}${getOrdinal(data.date)}`}
          </p>
        </>
      )}
    </>
  );
};

const WeatherCurrent: React.FC<CurrentConditionsProps> = ({ current }) => {
  const weather: WeatherProps = current.weather[0];

  return (
    <div className="w-full p-4">
      <div className="flex justify-end">
        <div className="w-1/2">
          <DateTime />
        </div>
        <div className="w-1/2 text-right">
          <p className="leading-none text-9xl">
            <span className="text-6xl">
              {getIcon(current.weather[0].icon, true)}
            </span>
            {Math.ceil(current.temp)}
          </p>
          <p className="leading-none text-4xl mt-4">
            {weather.description[0].toUpperCase() +
              weather.description.slice(1)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCurrent;
