// array.reduce() = reduce the elements of an array to a single value.

/*const prices = [5, 28, 35, 45, 59, 104];
const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(accumulator, element) {
    return accumulator + element;
}*/


// here accumlator will be previous number => 0, 5
// here element will be next number => 28
// here toFixed(2) means it will give two zeroes after the output => $276.00


const grades = [10, 20, 45, 68, 76, 90, 95];
const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum);
console.log(minimum);

function getMax(accumulator, element) {
    return Math.max(accumulator, element)
}

function getMin(accumulator, element) {
    return Math.min(accumulator, element)
}


