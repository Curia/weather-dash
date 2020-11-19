import { getIcon } from "./WeatherConditions";
import { getWeekDay } from "./DateTime";

interface WeatherDayProps {
  dt: number;
  temp: Array<number>;
  weather: [description: string, icon: string, id: number, main: string];
}

interface WeatherWeekProps {
  daily: Array<WeatherDayProps>;
}

const WeatherDay = ({ day }) => {
  const currentDay: Date = new Date(day.dt * 1000);
  return (
    <div className="block flex-1 flex flex-col items-center">
      <p className="text-4xl">{getIcon(day.weather[0].icon)}</p>
      <p>
        {Math.ceil(day.temp.min)}/{Math.ceil(day.temp.max)}
      </p>
      <p className="text-xl">{getWeekDay(currentDay.getDay()).slice(0, 3)}</p>
    </div>
  );
};

const WeatherWeek: React.FC<WeatherWeekProps> = ({ daily }) => {
  return (
    <div className="flex flex-wrap items-center">
      {daily.map((day) => (
        <WeatherDay day={day} />
      ))}
    </div>
  );
};

export default WeatherWeek;
