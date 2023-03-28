//Nav
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

//Slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = 'block';  
  dots[slideIndex-1].className += 'active';
}
//Weather Card
url = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=55079db1c440a3aa70df7a9d3c6266fb'

let currentTemp= document.querySelector('#current-temp');
let currentConditions = document.querySelector('#current-cond')
let humidity = document.querySelector('#humidity')
let forecast = document.querySelector('#forecast')

async function weatherFetch(){
  const response = await fetch(url)
  if (response.ok){
    const data = await response.json()
    console.log(data, 'Data')
    weatherCard(data)
  }
  else{
    throw Error(await response.text());
  }

}
function weatherCard(data){
  currentTemp.innerHTML = data.main.temp.toFixed(0)
  currentConditions.innerHTML = data.weather[0].description
  humidity.innerHTML = data.main.humidity

}
weatherFetch()