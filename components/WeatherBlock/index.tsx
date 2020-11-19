import React from "react";
import useSWR from "swr";

// Components
import WeatherConditions from "./WeatherConditions";
import DateTime from "./DateTime";
import WeatherWeek from "./WeatherWeek";

const WeatherBlock: React.FC<{}> = () => {
  const { data, error } = useSWR("/api/fetchWeather", {
    refreshInterval: 60000,
  });

  if (error) return <div>Failed to retrieve weather info</div>;

  return (
    <>
      {!data ? (
        <p>Loading</p>
      ) : (
        <div className="h-full flex flex-wrap justify-between">
          <div className="w-full">
            <div className="flex">
              <div className="w-1/2">
                <DateTime />
              </div>
              <div className="w-1/2 ">
                <WeatherConditions
                  current={data.current}
                  conditions={data.current.weather[0]}
                />
              </div>
            </div>
          </div>
          <div className="w-full">
            <WeatherWeek daily={data.daily} />
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherBlock;
