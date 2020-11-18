import React from "react";

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

const WeatherConditions: React.FC<WeatherConditionsProps> = ({
  current,
  conditions,
}) => {
  return (
    <div className="flex flex-wrap">
      <div className="flex-initial">
        <img
          src={`http://openweathermap.org/img/wn/${conditions.icon}@2x.png`}
        />
      </div>
      <div className="flex-initial">
      <p className="text-sm">{conditions.main}</p>
        <p className="text-4xl">{Math.ceil(current.temp)}<sup>&#8451;</sup></p>
      </div>
    </div>
  );
};

export default WeatherConditions;
