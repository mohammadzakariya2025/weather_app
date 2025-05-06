const apikey = "f1ec355fd42b53c88b20cfacabf00f79"

const weatherDateEl = document.getElementById("weather-data")

const cityInputEl = document.getElementById("city-input")

const formEl = document.querySelector("form")

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const cityValue = cityInputEl.value;
    getWeatherData(cityValue);
});

async function getWeatherData(cityValue){
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`)

        if(!response.ok){
            throw new Error("Network response was not ok");
        }

        const data = await response.json();


        const temperature = Math.round(data.main.temp)

        const description = data.weather[0].description
        
        const icon = data.weather[0].icon

        const details = [
            `Feels like: ${Math.round(data.main.feels_like)}`,
            `Humidity: ${data.main.humidity}%`,
            `Wind speed: ${data.wind.speed}m/s`,
        ];

        weatherDateEl.querySelector(
            ".icon"
        ).innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather icon">`;

        weatherDateEl.querySelector(
            ".temperature"
        ).textContent = `${temperature}°C`;

        weatherDateEl.querySelector(".description").textContent = description;

        weatherDateEl.querySelector(".details").innerHTML = details
            .map((detail)=> `<div>${detail}</div>`)
            .join("");
    } catch (error) {
        weatherDateEl.querySelector(".icon").innerHTML = "";

        weatherDateEl.querySelector(".temperature").textContent = "";

        weatherDateEl.querySelector(".description").textContent = "An error has occurred, please try again later.";

        weatherDateEl.querySelector(".details").innerHTML = "";
    }
}