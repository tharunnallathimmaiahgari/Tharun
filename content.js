document.addEventListener("DOMContentLoaded", () => {
 
  const roomsData = [
    { title: "Deluxe Room", description: "Luxury and comfort.", image: "images/delux.jpeg" },
    { title: "Standard Room", description: "Cozy and affordable.", image: "images/standard.jpeg" },
    { title: "Suite Room", description: "Extra space and premium amenities.", image: "images/suite.jpeg" },
    { title: "Executive Room", description: "Top-tier experience.", image: "images/executive.jpeg" }
  ];

  const offersData = [
    { title: "Summer Sale", description: "Up to 50% off on selected hotels." },
    { title: "Holiday Escape", description: "Book early for extra discounts." },
    { title: "Weekend Getaway", description: "Short stay offers at great prices." }
  ];

  const suggestionsData = [
    { title: "New York", description: "Explore the city that never sleeps.", image: "images/Newyork.jpeg" },
    { title: "Los Angeles", description: "Hollywood glitz and sunny beaches.", image: "images/Los Angeles.jpeg" },
    { title: "Chicago", description: "World-class museums and deep-dish pizza.", image: "images/chicago.jpeg" },
    { title: "Miami", description: "Vibrant nightlife and beautiful beaches.", image: "images/miami.jpeg" }
  ];

 
  function renderContent(containerId, data, type) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; 

    data.forEach(item => {
      const card = document.createElement("div");
      card.classList.add(type === "offer" ? "offer" : "card");

      if (type === "room" || type === "suggestion") {
        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.title;
        img.classList.add(type === "room" ? "room-image" : "suggestion-image");
        card.appendChild(img);
      }

      const cardContent = document.createElement("div");
      cardContent.classList.add("card-content");

      const title = document.createElement("h3");
      title.textContent = item.title;
      title.classList.add(type === "room" ? "room-title" : "suggestion-title");

      const description = document.createElement("p");
      description.textContent = item.description;
      description.classList.add(type === "room" ? "room-description" : "suggestion-description");

      cardContent.appendChild(title);
      cardContent.appendChild(description);

      if (type === "room") {
        const button = document.createElement("a");
        button.href = "#";
        button.textContent = "Book Now";
        button.classList.add("btn");
        cardContent.appendChild(button);
      } else if (type === "offer") {
        const button = document.createElement("a");
        button.href = "#";
        button.textContent = "View";
        button.classList.add("btn");
        cardContent.appendChild(button);
      } else if (type === "suggestion") {
        const button = document.createElement("a");
        button.href = "#";
        button.textContent = "View Details";
        button.classList.add("btn");
        cardContent.appendChild(button);
      }

      card.appendChild(cardContent);
      container.appendChild(card);
    });
  }

  renderContent("rooms-container", roomsData, "room");
  renderContent("offers-container", offersData, "offer");
  renderContent("suggestions-container", suggestionsData, "suggestion");
});