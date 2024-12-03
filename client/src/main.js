import { api_source, url, options } from "./api";
import "./style.css";

const container = document.createElement("div");
container.classList.add("container");

const containerFilter = document.createElement("div");
containerFilter.classList.add("container-filter");

const span = document.createElement("span");
span.textContent = "Filter by source: ";

const select = document.createElement("select");
select.classList.add("styled-select");

const containerCard = document.createElement("div");
containerCard.classList.add("container-card");

document.body.appendChild(container);
container.append(containerFilter, containerCard);
containerFilter.append(span, select);

const getFilters = async () => {
  try {
    const response = await fetch(api_source);
    const json = await response.json();
    json.forEach((filter) => {
      const option = document.createElement("option");
      option.value = filter.id;
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
    const newsUrl = selectedSource ? `${url}?source=${selectedSource}` : url;

    const response = await fetch(newsUrl, options);
    const json = await response.json();
    json.forEach((news) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const cardContent = document.createElement("div");
      cardContent.classList.add("card-content");

      const title = document.createElement("h2");
      title.classList.add("card-title");
      title.textContent = news.title;

      const p = document.createElement("p");
      p.classList.add("card-description");
      p.textContent = news.url;


      cardContent.append(title, p);
      card.appendChild(cardContent);
      containerCard.appendChild(card);
    });

    console.log("Noticias cargadas:", json);
  } catch (error) {
    console.error("Error al cargar noticias:", error.message);
  }
};

getFilters();
getNews();
