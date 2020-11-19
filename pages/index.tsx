import type { AppProps } from "next/app";
import useSWR from "swr";

// Components
import WeatherCurrent from "@components/Weather/WeatherCurrent";

function Index({ Component, pageProps }: AppProps) {
  const { data, error } = useSWR("/api/fetchWeather", {
    refreshInterval: 60000,
  });

  if (error) return <div>Unable to retrieve weather info</div>;
  return (
    <>
      {!data ? (
        <p>Loading</p>
      ) : (
        <div className="w-screen h-screen bg-background text-primary">
          <div className="flex flex-col justify-between h-full">
            <div>
              <WeatherCurrent current={data.current} />
            </div>
            <div>graph here</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Index;
