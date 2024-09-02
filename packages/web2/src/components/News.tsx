export const API_URL = 'https://developer-lostark.game.onstove.com/news/events';

const GetData = async () => {
  return await fetch(API_URL, {
    headers: {
      Authorization: `bearer ${process.env.LOSTART_CLIENT_SECRET}`
    }
  }).then((response) => response.json());
};

export default async function News() {
  const data = await GetData();
  console.log(data);

  return <></>;
}
