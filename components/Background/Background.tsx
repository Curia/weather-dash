import React from "react";
import useSWR from "swr";
import Image from "next/image";

const BackgroundImage: React.FC = () => {
  const { data, error } = useSWR("/api/fetchBackground", {
    refreshInterval: 1800000, // Every 5 Minutes
  });

  if (error) return <div>Unable to grab background source</div>;
  return (
    <>
      {!data ? (
        <p>Loading</p>
      ) : (
        <div className="absolute -z-1 w-screen h-screen">
          <Image src={data.src} layout="fill" className="-z-1"/>
          <div className="w-screen h-screen bg-gradient-to-t from-black absolute"></div>
        </div>
      )}
    </>
  );
};

export default BackgroundImage;
