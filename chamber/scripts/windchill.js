const url = 'https://api.openweathermap.org/data/2.5/weather?q=LasVegas&units=imperial&appid=55079db1c440a3aa70df7a9d3c6266fb'

let currentTemp = document.querySelector('#current-temp');
let weatherIcon = document.querySelector('#weather-icon');
let captionDesc = document.querySelector('figcaption');
let windSpeed = document.querySelector('#wind-speed')
let airTemp = document.querySelector('#air-temp')
//let windChill = document.querySelector('#windchill')



async function apiFetch(){
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.log(data)
            displayWeather(data);
        }
        else{
            throw Error(await response.text());
        }
}
apiFetch();

function displayWeather(data){
    currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;
    windSpeed.innerHTML = `${data.wind.speed.toFixed(2)}`;
    airTemp.innerHTML = `${data.wind.deg.toFixed(0)}`;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}


//f = 35.74 + 0.6215t − 35.75s^0.16 + 0.4275ts^0.16
// f is the wind chill factor in Fahrenheit, t is the air average temperature in Fahrenheit, 
// s is the wind speed in miles per hour.

const t = parseInt(airTemp.innerHTML)
const s = parseInt(windSpeed.innerHTML)

if (t <=50 && s >3.0){
    const windChill = 35.74 + 0.6215*t - 35.75*s^0.16 + 0.4275*ts^0.16
    document.querySelector('#windchill').innerHTML = windChill
}
else{
    document.querySelector('#windchill').innerHTML = 'N/A'
}