//Last modified
let modDate = new Date (document.lastModified)
document.querySelector('#last-modified').textContent = `Last Modified on: ${modDate}`

//Nav
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}