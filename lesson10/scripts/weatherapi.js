
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const coordinates ='http://api.openweathermap.org/geo/1.0/zip?zip=89143,US&appid=55079db1c440a3aa70df7a9d3c6266fb';
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=36.3223&lon=-115.2932&appid=55079db1c440a3aa70df7a9d3c6266fb'

async function coordinatesFetch(){
    try{
        const response = await fetch(coordinates);
        if (response.ok){
            const coordinatesData = await response.json();
            console.log(coordinatesData)
        }
        else{
            throw Error(await response.text());
        }
    }
        catch (error){
        console.log(error);
    }
}
coordinatesFetch();

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.log(data)
            displayResults(data);
        }
        else{
            throw Error(await response.text());
        }
    }
        catch (error){
        console.log(error);
    }
}
apiFetch();

function displayResults(weatherData){
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}