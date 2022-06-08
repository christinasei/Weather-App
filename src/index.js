function currentTime(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];

  let hours = now.getHours();

  let minutes = now.getMinutes();
  minutes = minutes <= 9 ? "0" + minutes : minutes;

  return `${day}, ${hours}:${minutes}`;
}
let date = document.querySelector(".date");
let now = new Date();
date.innerHTML = currentTime(now);

//function changeToF (event) {
//event.preventDefault();
//let fTemp = document.querySelector("#temperature");
//fTemp.innerHTML=`71`;
//}

//let fahrenheitSelector = document.querySelector("#fahrenheit");
//fahrenheitSelector.addEventListener("click", changeToF);

//function changeToC (event) {
// event.preventDefault();
// let cTemp = document.querySelector("#temperature");
// cTemp.innerHTML=`22`;
//}
//let celsiusSelector=document.querySelector("#celsius");
//celsiusSelector.addEventListener("click", changeToC);
//let searchCity=document.querySelector("#searchCity");
//let city=searchCity.value;
//console.log(searchCity.value);
function search(city) {
  let unit = "metric";
  let url = "https://api.openweathermap.org/data/2.5/weather";
  let apiKey = "760a6673fe694cb8c913e7785b52e3e3";
  let weatherUrl = `${url}?q=${city}&units=${unit}&appid=${apiKey}`;

  axios.get(weatherUrl).then(currentConditions);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#searchCity").value;
  console.log(city);
  search(city);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

search("New York");

function currentConditions(response) {
  let showTemp = document.querySelector("#temperature");
  console.log(response.data.main.temp);
  let temp = Math.round(response.data.main.temp);
  showTemp.innerHTML = temp;

  let forecastCity = document.querySelector("#selectedCity");
  forecastCity.innerHTML = response.data.name;

  let wind = document.querySelector("#wind");
  let windspeed = Math.round(response.data.wind.speed);
  wind.innerHTML = `${windspeed} km/h`;
  console.log(response.data.wind.speed);
}
function currentLocation(position) {
  console.log(position);
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  console.log(lat);
  let apiKey = "760a6673fe694cb8c913e7785b52e3e3";
  let url = "https://api.openweathermap.org/data/2.5/weather?";
  let weatherUrl = `${url}lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  console.log(weatherUrl);
  axios.get(weatherUrl).then(currentConditions);
}
navigator.geolocation.getCurrentPosition(currentLocation);

let locationButton = document.querySelector(".locationButton");
locationButton.addEventListener("click", currentLocation);

//function currentWLocation (response) {
// console.log(response.data.name);
//let showTemp=document.querySelector("#temperature");
//console.log(response.data.main.temp);
//let temp= Math.round(response.data.main.temp);
//showTemp.innerHTML=temp;

//let forecastCity=document.querySelector("#selectedCity");
//forecastCity.innerHTML=response.data.name;

//let wind=document.querySelector("#wind");
//let windspeed=Math.round(response.data.wind.speed);
//wind.innerHTML=`${windspeed} km/h`;
//console.log(response.data.wind.speed);
//}
