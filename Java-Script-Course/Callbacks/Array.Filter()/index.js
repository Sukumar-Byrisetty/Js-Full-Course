// array.filter() = creates a new array by filtering out elements.

/*let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

// console.log(evenNums);
console.log(oddNums);

function isEven(element) {
    return element % 2 === 0;
}

function isOdd(element) {
    return element % 2 !== 0;
}*/


/*const ages = [16, 17, 18, 18, 19, 20, 60];
const adults = ages.filter(isAdult);
const childrens = ages.filter(isChild);

console.log(adults);
console.log(childrens);

function isAdult(element) {
    return element >= 18;
}

function isChild(element) {
    return element < 18;
}*/

const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "grapes", "guava"];
const shortWords = words.filter(getShortWords);
const lengthWords = words.filter(getLengthWords);

console.log(lengthWords);

function getShortWords(element) {
    return element.length <= 6;
}

function getLengthWords(element) {
    return element.length > 6;
}

