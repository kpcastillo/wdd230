const url = "https://kpcastillo.github.io/wdd230/chamber/json/data.json"

const output = function(businessList){
  businessList.companies.forEach(business => {
    let section = document.createElement('section')
    let name = document.createElement('h3')
    name.innerHTML = business.name
    let description = document.createElement('p')
    description.innerHTML = business.description
    let address = document.createElement('h5')
    address.innerHTML = business.address
    let phonenumber = document.createElement('h5')
    phonenumber.innerHTML = business.phonenumber
    let website = document.createElement('p')
    website.innerHTML = business.website
    let membershiplevel = document.createElement('p')
    membershiplevel.innerHTML = business.membershiplevel
    let logo = document.createElement('img');

    logo.setAttribute('src', business.image);
    logo.setAttribute('alt', `Portait of ${business.name}`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '400');

    section.appendChild(name);
    section.appendChild(description)
    section.appendChild(address)
    section.appendChild(phonenumber);
    section.appendChild(website)
    section.appendChild(membershiplevel);
    section.appendChild(logo);
    document.querySelector('#business-cards').append(section);
    })
}; 
//output(businessList)

async function getBusiness(url){
  const response = await fetch(url)
    if(response.ok){
      let businessData = await response.json()
      console.log('data', businessData)
      businessList = businessData
      output(businessData)
    }
    else{
      console.log('Data could not be fetched')
    }
  
}
getBusiness(url);

const grid = document.querySelector('#grid');
const list = document.querySelector('#list');

const listDisplay = function(){
  display.classList.add('list')
  display.classList.remove('grid')
}
list.addEventListener('click', listDisplay)

const gridDisplay = function(){
  display.classList.add('grid')
  display.classList.remove('list')
}
grid.addEventListener('click', gridDisplay)