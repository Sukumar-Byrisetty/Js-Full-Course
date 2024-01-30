// array.map() => accepts a callback and applies that function to each of an array, then return a new array.

const students = ["Rahul", "Karthik", "Siri", "Venu", "Gopal"];
const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);

console.log(studentsUpper);
console.log(studentsLower);

function upperCase(element) {
    return element.toUpperCase();
}

function lowerCase(element) {
    return element.toLowerCase();
}


/*let numbers = [1, 2, 3, 4, 5];

let squares = numbers.map(square);
let cubes = numbers.map(cube);


cubes.forEach(print);

function square(element) {
    return Math.pow(element, 2);
}
function cube(element) {
    return Math.pow(element, 3);
}

function print(element) {
    console.log(element);
}*/


/*const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element) {
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

document.getElementById("Dates").innerHTML  = formattedDates; */