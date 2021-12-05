let now = new Date();

let h2 = document.querySelector("h2");

let date = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let year = now.getFullYear();

let days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thur", "Fri"];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];

h2.innerHTML = `${day} ${month} ${date}, ${hours}:${minutes}, ${year}`;

//Search City
function enterCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input").value;
  let apiKey = "7fe508d235d0ee4554ec8bb21032d44e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
//Seaching City & Temperature
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let city = response.data.name;
  let message = `It is ${temperature} degrees in ${city}`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = message;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", enterCity);

//Bonus --> Ready to go beyond
function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let temperature = ((temperatureElement - 32) * 5) / 9;
  temperatureElement.innerHTML = Math.round(temperature);
}

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);
