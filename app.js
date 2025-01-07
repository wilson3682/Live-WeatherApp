const weatherAppForm = document.querySelector(".weatherAppForm");
const cityLocation = document.querySelector(".cityLocation");
const tempUnit = document.querySelector(".tempUnit");
const card = document.querySelector(".card");
const apiKey = "YOUR_API_KEY_HERE";
// Please do not use my api key, the api key will be inactive after sharing.

weatherAppForm.addEventListener("submit", async event => {
  event.preventDefault();
  const city = cityLocation.value;
  const unit = tempUnit.value;
  if (city) {
    try {
      const weatherData = await getWeatherData(city);
      displayWeatherInfo(weatherData, unit);
    } catch (error) {
      console.error(error);
      displayError(error);
    }
  } else {
    displayError("Please enter a city!");
  }
});

async function getWeatherData(city) {

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

                 const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error("Could not fetch weather data");
  }

  return await response.json();
}

function displayWeatherInfo(data, unit) {
const { name: city, main: { temp, humidity }, weather: [{ description, id }] } = data;
  card.textContent = "";
  card.style.display = "flex";
  const locationDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const descDisplay = document.createElement("p");
  const weatherEmoji = document.createElement("p");
  locationDisplay.textContent = city;
  tempDisplay.textContent = unit == = "C"
                                      ? `$ {(temp - 273.15).toFixed(1)}°C`
                                      : `$ {((temp - 273.15) * 9 / 5 + 32).toFixed(1)}°F`;
humidityDisplay.textContent = `Humidity: $ {humidity} % `;
  descDisplay.textContent = description;
  weatherEmoji.textContent = getWeatherEmoji(id);
  locationDisplay.classList.add("locationDisplay");
  tempDisplay.classList.add("tempDisplay");
  humidityDisplay.classList.add("humidityDisplay");
  descDisplay.classList.add("descDisplay");
  weatherEmoji.classList.add("weatherEmoji");
  card.appendChild(locationDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(descDisplay);
  card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId) {
  switch (true) {
    case (weatherId >= 200 && weatherId < 300):
      return "⛈️"; // Thunderstorm
    case (weatherId >= 300 && weatherId < 400):
      return "🌧️"; // Drizzle
    case (weatherId >= 500 && weatherId < 600):
      return "🌧️"; // Rain
    case (weatherId >= 600 && weatherId < 620):
      return "❄️"; // Snow
    case (weatherId >= 620 && weatherId < 623):
      return "🌨️"; // Extreme Snow
    case (weatherId >= 700 && weatherId < 800):
      return "🌫️"; // Atmosphere (mist, smoke, haze, etc.)
    case (weatherId === 800):
      return "☀️"; // Clear sky
    case (weatherId === 801):
      return "🌤️"; // Few clouds
    case (weatherId === 802):
      return "⛅"; // Scattered clouds
    case (weatherId === 803):
      return "🌥️"; // Broken clouds
    case (weatherId === 804):
      return "☁️"; // Overcast clouds
    case (weatherId === 900):
      return "🌪️"; // Tornado
    case (weatherId === 901):
      return "🌀"; // Tropical storm
    case (weatherId === 902):
      return "🌧️"; // Hurricane
    case (weatherId === 903):
      return "❄️"; // Cold
    case (weatherId === 904):
      return "🔥"; // Hot
    case (weatherId === 905):
      return "🌬️"; // Windy
    case (weatherId === 906):
      return "🌨️"; // Hail
    case (weatherId >= 951 && weatherId <= 957):
      return "🌬️"; // Breeze to Gale
    case (weatherId >= 958 && weatherId <= 962):
      return "💨"; // Storm to Hurricane
    default:
      return "❓"; // Unknown weather condition
  }
}

function displayError(message) {

  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}
