import React, { useEffect, useState } from "react";
import Geocode from "react-geocode";

Geocode.setApiKey(`${process.env.NEXT_PUBLIC_GOOGLEAPI_KEY}`);
Geocode.setRegion(`${process.env.NEXT_PUBLIC_GEOLOCATION_REGION}`);

interface SearchLocationProps {
  geolocation: any;
  setGeolocation: any;
}

const SearchLocation: React.FC<SearchLocationProps> = ({geolocation, setGeolocation}) => {
    console.log(process.env.NEXT_PUBLIC_GOOGLEAPI_KEY);

  Geocode.fromAddress("Diggers Rest").then(
    response => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
      setGeolocation({
          ...geolocation,
          lat: lat,
          long: lng,
          isSearch: false,
          isSet: true
      })
    },
    error => {
      console.error(error);
    }
  );

  return (
    <p>Searching</p>
  );
};

export default SearchLocation;
