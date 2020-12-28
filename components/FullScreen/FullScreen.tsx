import React, { useState } from "react";

// Components
import { requestWakeLock, releaseWakeLock } from "@components/utils";

// Icons
import { BsArrowsAngleExpand, BsArrowsAngleContract } from "react-icons/bs";

const FullScreen: React.FC<{}> = () => {
  const [fullscreen, setFullscreen] = useState<boolean | null>(false);

  const handleFullscreen = (event) => {
    event.preventDefault();
    if (fullscreen) {
      document.exitFullscreen();
      releaseWakeLock();
    } else {
      document.body.requestFullscreen();
      requestWakeLock();
    }
    setFullscreen(!fullscreen);
  };

  return (
    <button
      className="absolute top-0 right-0 bg-transparent rounded-full text-xl text-white m-4 p-2 block"
      onClick={(e: React.MouseEvent<HTMLInputElement>) => handleFullscreen(e)}
    >
      {fullscreen ? <BsArrowsAngleContract /> : <BsArrowsAngleExpand />}
    </button>
  );
};

export default FullScreen;