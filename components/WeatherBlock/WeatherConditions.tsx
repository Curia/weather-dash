import React from "react";

interface WeatherConditionsProps {
  conditions: {
    id: boolean;
    main: string;
    description: string;
    icon: string;
  };
}

const WeatherConditions: React.FC<WeatherConditionsProps> = ({conditions}) => {
  return (
  <>
  <img src={`http://openweathermap.org/img/wn/${conditions.icon}@2x.png`} />
  <p>{conditions.main}</p>
  </>);
};

export default WeatherConditions;
