import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  LabelList,
  XAxis,
} from "recharts";

import { getIcon, getWeekDay } from "@components/utils";

interface WeatherDayProps {
  dt: number;
  temp: Array<number>;
  weather: [description: string, icon: string, id: number, main: string];
}

interface WeatherWeekProps {
  daily: Array<WeatherDayProps>;
}

interface DataInterfaceItem {
  day: string;
  max: number;
  min: number;
  icon: string;
}

interface DataInterface extends Array<DataInterfaceItem> {}

const weeklyData = (daily) => {
  const data: DataInterface = [];
  daily.map((day) => {
    const date = new Date(day.dt * 1000)
    const weekDay: string = getWeekDay(date.getDay()).substr(0, 3);

    data.push({
      day: weekDay,
      max: Math.ceil(day.temp.max),
      min: Math.ceil(day.temp.min),
      icon: day.weather[0].icon,
    });
  });
  return data;
};

const WeatherGraph: React.FC<{ data: DataInterface }> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="80%">
      <AreaChart data={data} margin={{ left: 0, bottom: 0 }}>
        <Area
          type="monotone"
          dataKey="max"
          stroke="#fcb404"
          strokeWidth={5}
          fill="#fccd62"
        />

        <Area
          type="monotone"
          dataKey="min"
          stroke="#fcb404"
          strokeWidth={5}
          fill="#fccd62"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

const WeatherForcast: React.FC<{ data: DataInterface }> = ({ data }) => {
  return (
    <div className="absolute bottom-0 w-full">
      <div className="flex">
        {data.map((day) => (
          <div className="flex-grow flex flex-col items-center pb-5">
            <p className="text-3xl">{day.day}</p>
            <p className="leading-none text-2xl">
              <span className="text-xl">{getIcon(day.icon, true)}</span>
              {Math.ceil(day.max)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const WeatherWeek: React.FC<WeatherWeekProps> = ({ daily }) => {
  const data: DataInterface = weeklyData(daily);

  return (
    <div className="w-full h-full flex items-end">
      <WeatherGraph data={data} />
      <WeatherForcast data={data} />
    </div>
  );
};

export default WeatherWeek;
