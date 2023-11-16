const apiKey = "b17f88664469cdd10769f4dbd2fa178f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const input = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

function updateData(data){
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp);
  document.querySelector(".experience").innerHTML = Math.round(data.main.feels_like);
  document.querySelector(".humidity").innerHTML = data.main.humidity;
  document.querySelector(".wind-speed").innerHTML = data.wind.speed;
}

function updateImg(data) {
  if(data.weather[0].main === 'Clear'){
    weatherIcon.src = "images/clear.png"
  } else if(data.weather[0].main === 'Clouds') {
    weatherIcon.src = "images/clouds.png"
  } else if(data.weather[0].main === 'Drizzle') {
    weatherIcon.src = "images/drizzle.png"
  } else if(data.weather[0].main === 'Mist') {
    weatherIcon.src = "images/mist.png"
  } else if(data.weather[0].main === 'Rain') {
    weatherIcon.src = "images/rain.png"
  } else if(data.weather[0].main === 'Snow') {
    weatherIcon.src = "images/snow.png"
  }
  document.querySelector(".forcast-display").style.display = 'block';
}

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();

  console.log(data);

  updateData(data);

  updateImg(data);

}

searchBtn.addEventListener("click", ()=>{
  if (input.value === ''){
    checkWeather('london');
  } else {
    checkWeather(input.value);
  }

})