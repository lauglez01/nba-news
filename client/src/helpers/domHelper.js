
export const createContainer = (className) => {
    const container = document.createElement("div");
    container.classList.add(className);
    return container;
  };
  
  export const createCard = (news) => {
    const card = document.createElement("div");
    card.classList.add("card");
  
    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
  
    const title = document.createElement("h2");
    title.classList.add("card-title");
    title.textContent = news.source;  
  
    const description = document.createElement("p");
    description.classList.add("card-description");
    description.textContent = news.title;  
  
    const link = document.createElement("a");
    link.href = news.url; 
    link.textContent = news.url;  
  
    cardContent.append(title, description, link);
    card.appendChild(cardContent);
  
    return card;
  };

  