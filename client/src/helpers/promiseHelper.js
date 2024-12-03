import { latestNews } from "../classes/latestNews";

export const fetchAndParseNews = (newsUrl, options) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(newsUrl, options);
      const json = await response.json();
      const newsList = json.map(news => {
        return new latestNews(news.title, news.source, news.url);
      });
      resolve(newsList);
    } catch (error) {
      reject('Error fetching and parsing news:', error);
    }
  });
};
  