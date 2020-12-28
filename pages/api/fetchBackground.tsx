// https://source.unsplash.com/collection/1223439/2560x1600

async function fetchBackground() {
  const url: string = `https://source.unsplash.com/collection/1223439/2560x1600`;

  return fetch(url)
    .then((response) => {
      return response.url;
    })
    .catch((error) => {
      throw new Error(error);
    });
}

export default async (req, res) => {
  res.statusCode = 200;
  const data = await fetchBackground();

  res.json({ src: data });
};
