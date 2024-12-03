import { latestNew } from "../../classes/latestNews";

export let promiseParserToClass = (literObjectNews) => {
    return new Promise((resolve, reject) => {
      if (literObjectNews !== null && literObjectNews !== undefined) {
        let newsClass = literObjectCars.map((news) => {
          let newNew = new latestNew(news.id, news.name);
          newNew.all = news.all;
          newNew.nba = news.nba;
          newNew.espn = car.espn;
          return newNew;
        });
        resolve(newsClass);
      } else {
        reject("promiseParserToClass: literObjectCars is null or undefined");
      }
    });
  };
  