import React from "react";
import useSWR from "swr";

// Components
import WeatherConditions from "./WeatherConditions";

const WeatherBlock: React.FC<{}> = () => {
  const { data, error } = useSWR("/api/fetchWeather");

  if (error) return <div>Failed to retrieve weather info</div>;
  console.log(data);
  return (
    <>
      {!data ? (
        <p>Loading</p>
      ) : (
        <>
          <WeatherConditions conditions={data.current.weather[0]} />
          <p className="text-6xl font-sans">Currently {Math.ceil(data.current.temp)} <sup className="text-2xl">°C</sup></p>
        </>
      )}
    </>
  );
};

export default WeatherBlock;
