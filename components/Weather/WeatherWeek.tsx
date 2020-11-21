import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  LabelList,
  XAxis,
} from "recharts";

import { getIcon, getDateTime } from "@components/utils";

interface WeatherDayProps {
  dt: number;
  temp: Array<number>;
  weather: [description: string, icon: string, id: number, main: string];
}

interface WeatherWeekProps {
  daily: Array<WeatherDayProps>;
}

interface DataInterface {
  day: string;
  max: number;
  min: number;
  icon: string;
}

const weeklyData = (daily) => {
  const data: Array<DataInterface> = [];
  daily.map((day) => {
    const weekDay: string = getDateTime(day.dt).day.substr(0, 3);

    data.push({
      day: weekDay,
      max: Math.ceil(day.temp.max),
      min: Math.ceil(day.temp.min),
      icon: day.weather[0].icon,
    });
  });

  // Add empty value to end to fix design
  data[data.length - 1].day = "";
  return data;
};

const WeatherWeek: React.FC<WeatherWeekProps> = ({ daily }) => {
  const data: Array<DataInterface> = weeklyData(daily);

  return (
    <div className="w-full h-full flex items-end">
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
    </div>
  );
};

export default WeatherWeek;
