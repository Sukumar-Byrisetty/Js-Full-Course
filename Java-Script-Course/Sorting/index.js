// sort() = method used to sort elements of an array in place.
//          Sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings

const people = [{name: "Virat Kohli", age: 30, gpa: 3.0},
                {name: "Ms Dhoni", age: 35, gpa: 1.5},
                {name: "Hardik Pandya", age: 51, gpa: 2.5},
                {name: "Yusuf", age: 27, gpa: 4.0}]

people.sort((a,b) => b.name.localeCompare(a.name));

console.log(people);

//=> in th above if you need to sort a property that contains string with in object we will use "localeCompare"



/*const people = [{name: "Virat Kohli", age: 30, gpa: 3.0},
                {name: "Ms Dhoni", age: 35, gpa: 1.5},
                {name: "Hardik Pandya", age: 51, gpa: 2.5},
                {name: "Yusuf", age: 27, gpa: 4.0}]

people.sort((a,b) => a.name - b.name);
// people.sort((a,b) => b.age - a.age);

console.log(people);*/



/*let numbers = [1, 10, 5, 7, 8, 4, 2, 9, 3,6]

numbers.sort((a, b) => b - a);

console.log(numbers);

//If the result is positive, b is sorted before a.

// => in the above it will print in descending order*/



/*let numbers = [1, 10, 5, 7, 8, 4, 2, 9, 3,6]

numbers.sort((a, b) => a - b);

console.log(numbers);

//If the result is negative, a is sorted before b.

//=> in the above it print in ascending order*/



/*let numbers = [1, 8, 10, 20, 7, 9, 100, 4, 3, 2, 6, 5];

numbers.sort();

console.log(numbers);

// => tn the above If numbers are sorted as strings, "20" is bigger than "100", because "2" is bigger than "1".*/



// let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

// fruits.sort();

// console.log(fruits);