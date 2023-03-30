//Nav
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

const url = "https://brotherblazzard.github.io/canvas-content/fruit.json"

const fruitOne = document.querySelector('#fruit-selector')


async function fruitFetch(){
    const response = await fetch(url)
    if (response.ok){
      const data = await response.json()
      console.log(data, 'Data fruit fetch')
     //   displaySelector(data))
    }
    else{
      throw Error(await response.text());
    }
}
fruitFetch()

function displaySelector(data){
    data.name.forEach(fruit => {
        let option = document.createElement('option')
        option.text = fruit.name
        console.log(data.name,'DataName')
        option.value = fruit.value

        fruitOne.options.add
        
    });
}