import React, { useState } from "react";

// Components
import TimeDate from "@components/TimeDate/TimeDate";
import BackgroundImage from "@components/Background/Background";
import FullScreen from "@components/FullScreen/FullScreen";
import WeatherCurrent from "@components/Weather/WeatherCurrent";

const Index: React.FC<{}> = ({}) => {
  return (
    <div className="w-screen h-screen text-primary">
      <BackgroundImage />

      <div className="w-screen h-screen p-10">
        <FullScreen />
        <div className="flex flex-wrap h-full">
          <div className="w-1/2 h-full">
            <TimeDate />
          </div>
          <div className="w-1/2 text-right">
            <WeatherCurrent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
