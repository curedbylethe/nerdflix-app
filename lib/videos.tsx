export const getVideos = async (search: string) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

  const response =
    await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search}&topicId=%2Fm%2F01k8wb&key=${YOUTUBE_API_KEY}
    `);

  const data = await response.json();

  return data?.items.map(doSthPls);
};

export const dataParser = (item) => {
  let data = {
    title: item.snippet.title,
    description: item.snippet.description,
    imgUrl: item?.snippet?.thumbnails?.high?.url,
  };

  return data;
};
