import React, { PureComponent } from "react";
import { AreaChart, Area, ResponsiveContainer, LabelList } from "recharts";

import { getWeekDay, getIcon } from "@components/utils";

interface WeatherDayProps {
  dt: number;
  temp: Array<number>;
  weather: [description: string, icon: string, id: number, main: string];
}

interface WeatherWeekProps {
  daily: Array<WeatherDayProps>;
}

interface DataInterface {
  dt: number;
  max: number;
  min: number;
}

const weeklyData = (daily) => {
  const data: Array<DataInterface> = [];
  daily.map((day) =>
    data.push({
      dt: day.dt,
      max: Math.ceil(day.temp.max),
      min: Math.ceil(day.temp.min),
    })
  );
  return data;
};

const WeatherWeek: React.FC<WeatherWeekProps> = ({ daily }) => {
  const data: Array<DataInterface> = weeklyData(daily);
  return (
    <div className="w-full h-full flex items-end">
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart data={data} margin={{ left: 0, bottom: 0 }}>
          <Area type="monotone" dataKey="max" stroke="#fcb404" fill="#fccd62">
            <LabelList dataKey="max" position="right" />
          </Area>
          <Area type="monotone" dataKey="min" stroke="#fcb404" fill="#fccd62">
            <LabelList dataKey="min" position="right" />
          </Area>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeatherWeek;
