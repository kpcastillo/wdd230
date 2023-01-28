// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
// long, medium, short options ... try them
datefield.innerHTML = `<em>${fulldate}</em>`;

function toggleMenu(){
    document.getElementById('navMenu').classList.toggle('open');
    document.getElementById('btn').classList.toggle('open');

}
const menu = document.getElementById('btn');
menu.onclick = toggleMenu;

let LastModif = new Date(document.lastModified);
document.querySelector('#lastModif').textContent = LastModif;
