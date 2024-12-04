import { LatestNews } from "../classes/latestNews";

export const parseNews = (json) => {
  return new Promise((resolve, reject) => {
    if(json !== null && json !==undefined){
      const newsList = json.map(news => {
      return new LatestNews(news.title, news.source, news.url);
      });
      resolve(newsList);
    } else {
      let error = new Error("object is null or undefined")
      error.name = "parseNews";
      reject(error);
    }
  });
};
  