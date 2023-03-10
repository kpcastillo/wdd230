
//Declaring an array
const arrayExample = ['one', 'two', 'three']

//Accesing an array
let aExample = arrayExample[0];


// Function to compute the product of number1 and number2
function myFunction(number1, number2) {
    let product = number1 * number2;
    return product
}
//Arrow function to compute the product of number1 and number2
const arrowFunction = (number1, number2) => {
    return number1 * number2;
};


//map()
const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));
// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]

//filter()
function greaterThan(value) {
    return value >= 5;
}
const originalArray = [1, 3, 12, 5, 8, 130, 44]
const filteredArray =originalArray.filter(greaterThan);
// filteredArray is [12, 5, 8, 130, 44]

//reduce()
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 0 + 1 + 2 + 3 + 4.....
const initialValue = 0;
const sumWithInitial = array2.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
// Expected output: 55
//console.log(sumWithInitial);






