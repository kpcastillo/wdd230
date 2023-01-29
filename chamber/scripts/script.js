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
document.querySelector('.lastMod').textContent = LastModif;


