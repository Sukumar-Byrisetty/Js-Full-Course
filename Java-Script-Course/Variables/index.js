// A Variable is a container for storing data
// A variable behaves as if it was the value that it containes

// Two steps: 
// 1. Declaration (var, let, const)
// 2. Assignment (= assignment operator)

// => Declaration of Variable Eg:
// var age = 1;
// console.log(age);
// let age;
// console.log("age");
// const age = 2;
// console.log(age);

// => Assignment operator Eg:
// let age = 22
// console.log(age);

// => Different variables have different data types :
// 1.Number Datatype Eg:
// let age = 22;     
// age = age + 1;

// console.log(age);

// 2.String datatype [it defines "characters" with in "" quotes] Eg:
/*let firstName = "Sukumar";
let age = 23;

console.log(firstName);
console.log(age);*/

// 3.Boolean datatype [it has only "TRUE" or "false" Values] Eg:
/*let firstName = "Sukumar";
let age = 23;
let student = true;

console.log(firstName);
console.log(age);
console.log(student);*/

let firstName = "Sukumar";
let age = 23;
let student = true;

console.log("Hello", firstName);
console.log("You are", age, "Years Old");
console.log("Enrolled:", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " Years Old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;


