const url = "https://kpcastillo.github.io/wdd230/chamber/json/data.json"

const output = function(businessList){
    businessList.forEach((business => {
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

        portrait.setAttribute('src', business.imageurl);
        portrait.setAttribute('alt', `Portait of ${business.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '450');

        section.appendChild(name);
        section.appendChild(description)
        section.appendChild(address)
        section.appendChild(phonenumber);
        section.appendChild(website)
        section.appendChild(membershiplevel);
        section.appendChild(portrait);
        document.querySelector('#business-cards').append(section);
    }))
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

