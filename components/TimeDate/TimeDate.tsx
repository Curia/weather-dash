import React, { useState, useEffect } from "react";

interface nowInterface {
  time: string;
  date: string;
}

//https://dockyard.com/blog/2020/02/14/you-probably-don-t-need-moment-js-anymore
const setTime = (language: string = navigator.language): string => {
  return Intl.DateTimeFormat(language, {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(new Date());
};

const setDate = (language: string = navigator.language): string => {
  return Intl.DateTimeFormat(language, {
    weekday: "long",
    month: "short",
    day: "numeric",
  }).format(new Date());
};

const TimeDate: React.FC = () => {
  const [language, setLanguage] = useState<string>(undefined);
  const [now, setNow] = useState<nowInterface>({
    time: "",
    date: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setNow({
        time: setTime(),
        date: setDate(),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setLanguage(navigator.language);
  }, []);

  return (
    <>
      {!language ? (
        <p>loading</p>
      ) : (
        <div className="text-white h-full justify-end  flex flex-col">
          <p className="text-7xl">{now.time}</p>
          <p className="text-4xl">{now.date}</p>
        </div>
      )}
    </>
  );
};

export default TimeDate;
