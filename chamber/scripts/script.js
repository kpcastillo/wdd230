function toggleMenu(){
    document.getElementById('navMenu').classList.toggle('open');
    document.getElementById('btn').classList.toggle('open');

}
const menu = document.getElementById('btn');
menu.onclick = toggleMenu;

const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
datefield.innerHTML = `<strong>${fulldate}</strong>`;

let LastModif = new Date(document.lastModified);
document.querySelector('#last-mod').textContent = LastModif;



let dayOfWeek = now.getDay();
if(dayOfWeek ===  1 || dayOfWeek === 2 ){
    let message = 'Come join us for the chamber meet and greet Wednesday at 7:00 p.m.'
    console.log(message);
}
document.querySelector('#banner').innerHTML = message
