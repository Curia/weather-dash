const DateTime: React.FC = ({}) => {
  const today: Date = new Date();
  const weekday: Array<string> = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const hours: number = today.getHours() % 12;
  const minutes: string | number = today.getMinutes() < 10 ? '0' +  today.getMinutes() : today.getMinutes();
  const ampm = today.getHours() >= 12 ? "pm" : "am";
  return (
    <div className="flex flex-wrap items-center mt-3">
      <div className="flex-initial">
      <p className="text-6xl leading-none block font-bold">
          {hours}:{minutes} {ampm}
        </p>
        <p className="text-2xl leading-none block font-bold mt-4">
          {weekday[today.getDay()]}
        </p>
      </div>
    </div>
  );
};

export default DateTime;
