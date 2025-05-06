const apikey = "f1ec355fd42b53c88b20cfacabf00f79"

const weatherDateEl = document.getElementById("weather-data")

const cityInputEl = document.getElementById("city-input")

const formEl = document.querySelector("form")

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const cityValue = cityInputEl.value;
    console.log(cityValue);
});