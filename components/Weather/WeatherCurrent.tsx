import React, { useEffect, useState } from "react";
import useSWR from "swr";

interface geolocationInterface {
  lat: number;
  long: number;
  error?: string;
}

const WeatherCurrent: React.FC = () => {
  const [geolocation, setGeolocation] = useState<geolocationInterface>({
    lat: 0,
    long: 0,
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
        setGeolocation({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      });
      console.log(geolocation);
    } else {
      setGeolocation({
        ...geolocation,
        error: "No geolocation avaliable",
      });
    }
  }, []);

  return !geolocation.error ? (
    <div className="text-white h-full justify-end  flex flex-col">
      <p className="text-7xl">{geolocation.lat}</p>
      <p className="text-4xl">{geolocation.long}</p>
    </div>
  ) : (
    <p>No geolocation, sorry.</p>
  );
};

export default WeatherCurrent;
