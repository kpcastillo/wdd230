//Nav
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

//API URL
const url = "https://brotherblazzard.github.io/canvas-content/fruit.json"

const fName = document.querySelector('#f-name')
const fEmail = document.querySelector('#f-email')
const fPhone = document.querySelector('#f-phone')
const fruitSelector = document.querySelector('#fruit-selector')
const fruitSelectorTwo = document.querySelector('#fruit-selector-two')
const fruitSelectorThree = document.querySelector('#fruit-selector-three')
const specialInst = document.querySelector('#f-instruct')
const fDate = document.querySelector('#f-date')
const formOutput = document.querySelector('#form-output')

fruitList = []


async function fruitFetch(){
    const response = await fetch(url)
    if (response.ok){
      const data = await response.json()
      console.log(data, 'Data fruit fetch')
      fruitList = data
      displaySelector(data)
    }
    else{
      throw Error(await response.text());
    }
}
fruitFetch()

function displaySelector(fruitList){
    for (let i = 0; i < fruitList.length; i++){
        let option = document.createElement('option')
        let optionTwo = document.createElement('option')
        let optionThree = document.createElement('option')
        option.innerHTML = fruitList[i].name
        optionTwo.innerHTML = fruitList[i].name
        optionThree.innerHTML = fruitList[i].name
        fruitSelector.appendChild(option)
        fruitSelectorTwo.appendChild(optionTwo)
        fruitSelectorThree.appendChild(optionThree)
    };
}
const button = document.querySelector('#submit-order')
const orderDisplay = document.querySelector('#order')
button.addEventListener('click', function() { 
    const newItem = input.value
    if(newItem != ''){
        input.value = '';

        const liElement = document.createElement('li');
        liElement.textContent = newItem;
        //list.appendChild(liElement);
        orderDisplay.appendChild(liElement);

        input.focus();
    }
    

});
const data = {};
const form = document.querySelector('#form')

formOutput.addEventListener('submit', (event) => {

    event.preventDefault();

   const formData = new FormData(event.target);
    //const formData = new FormData(form);
    console.log(formData, 'Form Data')
  
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
  
});
console.log(data, 'data list')

//the total amount of carbohydrates, protein, fat, sugar, and calories
function total(first, second, third){
    const total = first + second + third
    return total
}

//Display Order
function formDataOutput(){
    let nameOutput = document.createElement('p')
    nameOutput.innerHTML = `Name: ${data.fName}`
    formOutput.appendChild(nameOutput)

    let emailOutput = document.createElement('p')
    emailOutput.innerHTML = `Email: ${data.fEmail}`
    formOutput.appendChild(emailOutput)

    let phoneOutput = document.createElement('p')
    phoneOutput.innerHTML = `Phone Number: ${data.fPhone}`
    formOutput.appendChild(phoneOutput)

    let fruitOutput = document.createElement('p')
    fruitOutput.innerHTML = `First Fruit: ${data.fruitSelector}`
    formOutput.appendChild(fruitOutput)

    let fruitTwoOutput = document.createElement('p')
    fruitTwoOutput.innerHTML = `Second Fruit: ${data.fruitSelectorTwo}`
    formOutput.appendChild(fruitTwoOutput)

    let fruitThreeOutput = document.createElement('p')
    fruitThreeOutput.innerHTML = `Third Fruit: ${data.fruitSelectorThree}`
    formOutput.appendChild(fruitThreeOutput)

    let instOutput = document.createElement('p')
    instOutput.innerHTML = `Special Instructions: ${data.specialInst}`
    formOutput.appendChild(instOutput)

    let dateOutput = document.createElement('p')
    dateOutput.innerHTML = `Date: ${data.fDate}`
    formOutput.appendChild(dateOutput)

}
formDataOutput()