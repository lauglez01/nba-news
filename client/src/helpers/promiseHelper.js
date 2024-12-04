import { LatestNews } from "../classes/latestNews";

export const parseNews = (json) => {
  return new Promise((resolve, reject) => {
    try {
      
      const newsList = json.map(news => {
        return new LatestNews(news.title, news.source, news.url);
      });
      resolve(newsList);
    } catch (error) {
      reject('Error fetching and parsing news:', error);
    }
  });
};
  