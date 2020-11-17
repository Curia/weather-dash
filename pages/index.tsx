import type { AppProps } from "next/app";

// Components
import Tile from "@components/Tile";
import WeatherBlock from "@components/WeatherBlock";

function Index({ Component, pageProps }: AppProps) {
  return (
    <div className="flex h-screen bg-gray-200">
      <div className="flex-grow w-1/2">
        <div className="flex flex-col h-full">
          <Tile>
            <WeatherBlock />
          </Tile>

          <Tile>Contents here</Tile>
        </div>
      </div>
      <div className="flex-grow w-1/2">
        <Tile>Contents</Tile>
        </div>
    </div>
  );
}

export default Index;
