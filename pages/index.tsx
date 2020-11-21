import React, { useState } from "react";
import type { AppProps } from "next/app";
import useSWR from "swr";

// Components
import WeatherCurrent from "@components/Weather/WeatherCurrent";
import WeatherWeek from "@components/Weather/WeatherWeek";
import { requestWakeLock, releaseWakeLock } from "@components/utils";

// Icons
import { BsArrowsAngleExpand, BsArrowsAngleContract } from "react-icons/bs";

const FullScreen: React.FC<{}> = () => {
  const [fullscreen, setFullscreen] = useState<boolean | null>(false);

  const handleFullscreen = (event) => {
    event.preventDefault();
    if (fullscreen) {
      document.exitFullscreen();
      releaseWakeLock();
    } else {
      document.body.requestFullscreen();
      requestWakeLock();
    }
    setFullscreen(!fullscreen);
  };

  return (
    <button
      className="absolute bottom-0 right-0 bg-blue-400 rounded-full text-xl text-white m-4 p-2 block"
      onClick={(e: React.MouseEvent<HTMLInputElement>) => handleFullscreen(e)}
    >
      {fullscreen ? <BsArrowsAngleContract /> : <BsArrowsAngleExpand />}
    </button>
  );
};

const Index: React.FC<{}> = ({}) => {
  const { data, error } = useSWR("/api/fetchWeather", {
    refreshInterval: 60000,
  });

  if (error) return <div>Unable to retrieve weather info</div>;
  return (
    <>
      {!data ? (
        <p>Loading</p>
      ) : (
        <div className="w-screen h-screen bg-background text-primary">
          <div className="flex flex-col justify-between h-full">
            <div>
              <WeatherCurrent current={data.current} />
            </div>
            <WeatherWeek daily={data.daily} />
          </div>
          <FullScreen />
        </div>
      )}
    </>
  );
};

export default Index;
