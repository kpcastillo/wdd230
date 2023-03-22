//Hamburger menu
function toggleMenu(){
    document.getElementById('navMenu').classList.toggle('open');
    document.getElementById('btn').classList.toggle('open');

}
const menu = document.getElementById('btn');
menu.onclick = toggleMenu;

//Display current date
const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
datefield.innerHTML = `<strong>${fulldate}</strong>`;

//Last modified
let LastModif = new Date(document.lastModified);
document.querySelector('#last-mod').textContent = LastModif;

//Display banner with a message
let dayOfWeek = now.getDay();
if(dayOfWeek ===  1 || dayOfWeek === 2 ){
    message = 'Come join us for the chamber meet and greet Wednesday at 7:00 p.m.'
    let banner = document.querySelector('#banner')
    banner = message
}

//Lazy load images
let loadingImg = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {image.removeAttribute('data-src')};
};

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
    });
    });

    loadingImg.forEach((img) => {
      observer.observe(img);
    });
} 
else {
    loadingImg.forEach((img) => {
      loadImages(img);
    });
}

//Display number of visits using local storage
const visitsDisplay = document.querySelector("#visits");

let numVisits = Number(window.localStorage.getItem("visits-ls"));

if (numVisits != 0) {
	visitsDisplay.textContent = numVisits;
}
else {
	visitsDisplay.textContent = 'This is your first visit!';
}

numVisits++;
localStorage.setItem("visits-ls", numVisits);


//Display date of last visit
const lastVisit = document.querySelector("#last-visit");

let visit = window.localStorage.getItem("visits-ls")

let lastVisitDay = {visit, timestamp: new Date()}
lastVisit.innerHTML = lastVisitDay.timestamp

//Display time in days from last visit
const daysFromLastVisit = document.querySelector("#days");
const days = now - lastVisitDay.timestamp

if (days <= 0) {
	daysFromLastVisit.innerHTML = `0`;
} else {
  daysFromLastVisit.innerHTML = days;
}