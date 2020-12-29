import React, { useEffect, useState } from "react";
import useSWR from "swr";

// Components
import SearchLocation from "@components/Location/SearchLocation";

interface geolocationInterface {
  lat: number;
  long: number;
  error?: string | GeolocationPositionError;
  isSet: boolean;
  isSearch: boolean;
}

const WeatherCurrent: React.FC = () => {
  const [geolocation, setGeolocation] = useState<geolocationInterface>({
    lat: 0,
    long: 0,
    isSet: false,
    isSearch: false,
  });

  const setLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setGeolocation({
            ...geolocation,
            lat: position.coords.latitude,
            long: position.coords.longitude,
            isSet: true,
            error: null,
          });
        },
        (error) => {
          console.log(error);
          setGeolocation({
            ...geolocation,
            error: error,
          });
        }
      );
    } else {
      setGeolocation({
        ...geolocation,
        error: "No geolocation avaliable",
      });
    }
  };

  return (
    <div className="text-white h-full justify-end flex flex-col">
      {!geolocation.isSet ? (
        <div>
          <button
            className="ml-3 p-1 bg-blue-400 rounded"
            onClick={() => setLocation()}
          >
            Request Location
          </button>
          <button
            className="ml-3 p-1 bg-blue-400 rounded"
            onClick={() => setGeolocation({ ...geolocation, isSearch: true })}
          >
            Search Location
          </button>
          {geolocation.isSearch ? (
            <SearchLocation
              geolocation={geolocation}
              setGeolocation={setGeolocation}
            />
          ) : null}
        </div>
      ) : (
        <>
          <p className="text-7xl">{geolocation.lat}</p>
          <p className="text-4xl">{geolocation.long}</p>
        </>
      )}
    </div>
  );
};

export default WeatherCurrent;
