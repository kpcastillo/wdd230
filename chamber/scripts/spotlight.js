const output = function(business){
      let section = document.createElement('section')
      let name = document.createElement('h3')
      name.innerHTML = business.name
      let phonenumber = document.createElement('h5')
      phonenumber.innerHTML = business.phonenumber
      let website = document.createElement('p')
      website.innerHTML = business.website
      let logo = document.createElement('img');
  
      logo.setAttribute('src', business.image);
      logo.setAttribute('alt', `Portait of ${business.name}`);
      logo.setAttribute('loading', 'lazy');
      logo.setAttribute('width', '250');
  
      section.appendChild(name);
      section.appendChild(phonenumber);
      section.appendChild(website)
      section.appendChild(logo);
      document.querySelector('#dynamic-card').append(section);
}; 
  
async function getBusiness(url){
    const response = await fetch(url)
      if(response.ok){
        let businessData = await response.json()
        businessList = businessData
        return businessList
    }
}

const get_random = function(businessList){
    const randomList = []
    businessList.companies.forEach(business => {
        if (business.membership == "Gold"){
            randomList.push(business)
           // const random = randomList[Math.floor(Math.random() * randomList.length)];
            const random = Math.floor(Math.random() * randomList.length);
            output(random)
        }
    })
};
const url = "https://kpcastillo.github.io/wdd230/chamber/json/data.json"
const businessList = getBusiness(url)
get_random(businessList)   