const inputForm = document.getElementById("inputForm");
const submitInput = document.getElementById("submit");
const cityNameInput = document.getElementById("cityInput");
const apikey = "358fdb729fe423fc7b2eeb82ffa78b64";

const cityName = document.getElementById("cityName");
const cityTemperature = document.getElementById("citytemperature");
const cityHumidity = document.getElementById("cityHumidty");
const WeatherIcon = document.getElementById("cityWeatherIcon");
const WeatherDescription = document.getElementById("weatherDescription");

inputForm.addEventListener("submit", (event) =>
  {
    event.preventDefault();
    fetch(`http://api.weatherapi.com/v1/current.json?key=26cb9ef771284e9da4f134805242405&q=${cityNameInput.value}`)
    .then(res => res.json())
    .then(data => destructureData(data))
  })


  function destructureData(data)
  {
    const {current , location , ...other} = data;
    const {country ,name , localtime , ...other1} = location;
    const {cloud , condition , humidity , last_updated , temp_f, ...other2} = current;
    const {code , icon , text , ...other3} = condition
    console.log(data);

    displayData(country , name , localtime , cloud , condition , humidity , last_updated, temp_f , code , icon , text)
  }

  function displayData(country,city , localtime , cloud , condition , humidity , last_updated, temp_f, code , Icon ,Description)
  {
    cityName.textContent = city;
    cityTemperature.textContent = `${temp_f} ℉`;
    cityHumidity.textContent = `Humidity: ${humidity}`;
    // WeatherIcon.textContent = Icon;
    WeatherDescription.textContent = Description;
  }
