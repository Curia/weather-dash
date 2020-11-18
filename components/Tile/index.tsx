import React from "react";

interface TileProps {
  children: React.ReactNode
}

const Tile: React.FC<TileProps> = (props) => {
  return (
    <div className="flex-grow p-4 h-full">
      <div className="bg-white rounded-xl h-full p-4 shadow-xl">
        {props.children}
      </div>
    </div>
  );
};

export default Tile;
