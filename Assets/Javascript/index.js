const container = document.querySelector(".container");
const searchButton = document.querySelector(".search-box button");
const searchInput = document.querySelector(".search-box input");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error404 = document.querySelector(".not-found");
const error404Paragraph = document.querySelector(".not-found p");

searchInput.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    searchButton.click();
  }
});

searchButton.addEventListener("click", () => {
  const city = document.querySelector(".search-box input").value;

  if (city === "") return;

  //Create your own account and enter you own pvt API key
  const apiKey = "Enter your API key";

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.cod === "404") {
        container.style.height = "400px";
        weatherBox.style.display = "none";
        weatherDetails.style.display = "none";
        error404.style.display = "block";
        error404Paragraph.innerHTML = data.message;
        error404.classList.add("animation");
        return;
      }

      error404.style.display = "none";
      error404.classList.remove("animation");

      const image = document.querySelector(".weather-box img");
      const temperature = document.querySelector(".weather-box .temperature");
      const description = document.querySelector(".weather-box .description");
      const humidity = document.querySelector(
        ".weather-details .humidity span"
      );
      const wind = document.querySelector(".weather-details .wind span");

      switch (data.weather[0].main) {
        case "Clear":
          image.src = "./Assets/Images/clear.png";
          break;
        case "Clouds":
          image.src = "./Assets/Images/cloudy.png";
          break;
        case "Snow":
          image.src = "./Assets/Images/snowy.png";
          break;
        case "Rain":
          image.src = "./Assets/Images/rainy.png";
          break;
        case "Mist":
          image.src = "./Assets/Images/mist.png";
          break;

        default:
          image.src = "";
      }

      temperature.innerHTML = `${parseInt(data.main.temp)}<span> &#8451<span/>`;
      description.innerHTML = `${data.weather[0].description}`;
      humidity.innerHTML = `${data.main.humidity}%`;
      wind.innerHTML = `${data.wind.speed} Km/hr`;

      weatherBox.style.display = "";
      weatherDetails.style.display = "";
      weatherBox.classList.add("animation");
      weatherDetails.classList.add("animation");
      container.style.height = "550px";
    })
    .catch((error) => {
      console.log("Error:- ", error);
    });
});
