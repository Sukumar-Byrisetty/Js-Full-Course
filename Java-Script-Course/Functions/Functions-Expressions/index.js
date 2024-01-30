// function declaration = define a reusable block of the code that performs a specific task.

/*const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(square);

console.log(squares);

function square(element) {
    return Math.pow(element, 2)
}*/

// function expressions = a way to define function as values or variables.

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function(element) {
    return Math.pow(element, 2);
});
const cubes = numbers.map(function(element) {
    return Math.pow(element, 3);
});
const evenNums = numbers.filter(function(element) {
    return element % 2 === 0
})
const oddNums = numbers.filter(function(element) {
    return element % 2 !== 0
})
const total = numbers.reduce(function(accumalator ,element) {
    return accumalator + element;
})

console.log(total);

// in the above i passed the function as an argument in to the method.