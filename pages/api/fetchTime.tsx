// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {getWeekDay} from "@components/utils";


export default async (req, res) => {
  const now: Date = new Date();
  const hours: number = now.getHours() % 12;
  const minutes: string | number =
    now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
  const ampm = now.getHours() >= 12 ? "pm" : "am";

  res.statusCode = 200;
  res.json({
    time: now,
    secondsEpoch: Math.round(now.getTime() / 1000),
    hours,
    minutes,
    ampm,
    timeFormatted: `${hours ? hours : 12}:${minutes}`,
    day: getWeekDay(now.getDay()),
    date: now.getDate()
  });

};