import { api_source, url, options } from "./api";
import { fetchAndParseNews } from "./helpers/promiseHelper";
import { createContainer, createCard } from "./helpers/domHelper";

import "./style.css";

const container = createContainer("container");
const containerCard = createContainer("container-card");

const containerFilter = document.createElement("div");
containerFilter.classList.add("container-filter");

const span = document.createElement("span");
span.textContent = "Filter by source: ";

const select = document.createElement("select");
select.classList.add("styled-select");

document.body.appendChild(container);
container.append(containerFilter, containerCard);
containerFilter.append(span, select);

const getFilters = async () => {
  try {
    const response = await fetch(api_source);
    const json = await response.json();
    json.forEach((filter) => {
      const option = document.createElement("option");
      option.value = filter.name;
      option.textContent = filter.name;
      select.appendChild(option);
    });
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
};

const getNews = async () => {
  try {
    containerCard.innerHTML = "";
    const selectedSource = select.value;
    const newsUrl =
      selectedSource === "all"
        ? `${url}`
        : `${url}?source=${selectedSource}`;

    const newsList = await fetchAndParseNews(newsUrl, options);
    newsList.forEach((news) => {
      const card = createCard(news);
      containerCard.appendChild(card);
    });
  } catch (error) {
    console.error("Error al cargar noticias:", error.message);
  }
};

//cada vez que se cambia el select, hace el getNews
select.addEventListener("change", getNews);

getFilters();
getNews();
