export const getCommonVideos = async (url: string) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

  try {
    const BASE_URL = `youtube.googleapis.com/youtube/v3`;
    const response =
      await fetch(`https://${BASE_URL}/${url}&maxResults=25&key=${YOUTUBE_API_KEY}
  `);

    const data = await response.json();
    if (data?.error) {
      console.error("Youtube API error", data.error);

      return [];
    }
    return data?.items.map(dataParser);
  } catch (error) {
    console.error("Something went wrong with the video library: ", error);
    return [];
  }
};
interface data {
  title: string;
  description: string;
  imgUrl: string;
}
export const dataParser = (item: {
  id: { videoId: any };
  snippet: {
    title: string;
    description: string;
    thumbnails: { high: { url: string } };
  };
}): data => {
  const id = item.id?.videoId || item.id;
  let data = {
    title: item.snippet.title,
    description: item.snippet.description,
    imgUrl: item?.snippet?.thumbnails?.high?.url,
    id,
  };

  return data;
};

export const getVideos = (search: string) => {
  const URL = `search?part=snippet&q=${search}&topicId=%2Fm%2F01k8wb`;
  return getCommonVideos(URL);
};

export const getPopularVideos = () => {
  const URL = `videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=28`;
  return getCommonVideos(URL);
};
