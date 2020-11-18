import React from "react";
import useSWR from "swr";

// Components
import WeatherConditions from "./WeatherConditions";

const WeatherBlock: React.FC<{}> = () => {
  const { data, error } = useSWR("/api/fetchWeather", {
    refreshInterval: 60000,
  });

  if (error) return <div>Failed to retrieve weather info</div>;
  console.log(data);
  return (
    <>
      {!data ? (
        <p>Loading</p>
      ) : (
        <div className="flex flex-wrap overflow-hidden">
          <div className="w-full overflow-hidden">
            <WeatherConditions current={data.current} conditions={data.current.weather[0]} />
          </div>
          <div className="w-full overflow-hidden bg-red-300">
            Full
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherBlock;
