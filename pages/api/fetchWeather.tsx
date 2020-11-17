// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

async function fetchLocation() {
  const url: string = `https://api.openweathermap.org/data/2.5/onecall?lat=${process.env.WEATHERAPI_LAT}&lon=${process.env.WEATHERAPI_LONG}&exclude=minutely,hourly,alerts&units=metric&appid=${process.env.WEATHERAPI_KEY}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      throw new Error(error);
    });
}

export default async (req, res) => {
  res.statusCode = 200;
  const data = await fetchLocation();
  res.json(data);
};
