// destructuring = extract values from arrays and objects,
//                 then assign them to variables in a convenient way
//                 [] = to perform array detructuring
//                 {} = to perform object destructuring
//                 5 examples 


// ----------- EXAMPLE 1 ------------
// SWAP THE VALUE OF TWO VARIABLES

// let a = 5;
// let b = 10;

//  [a, b] = [b, a]

//  console.log(a);
//  console.log(b);


// ----------- EXAMPLE 2 -------------
// SWAP 2 ELEMENTS IN AN ARRAY

/*const colors = ["white", "red", "green", "blue", "pink"];

[colors[0], colors[3]] = [colors[3], colors[0]];

console.log(colors);*/


// ----------- EXAMPLE 3 -------------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

/*const colors = ["white", "red", "green", "blue", "purple"];

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);*/


// ----------- EXAMPLE 4 -------------
// EXTRACT VALUES FROM OBJECTS

/*const person1 = {
    firstName: "Virat",
    lastName: "Kohli",
    age: 35,
    job: "Cricketer"
}

const person2 = {
    firstName: "Ms",
    lastName: "Dhoni",
    age: 35,
}

const {firstName, lastName, age, job="Unemployed"} = person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);*/


// ----------- EXAMPLE 5 -------------
// DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({firstName, lastName, age, job="Unemployed"}) {
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const person1 = {
    firstName: "Virat",
    lastName: "Kohli",
    age: 35,
    job: "Cricketer",
}

const person2 = {
    firstName: "Yusuf",
    lastName: "Pathan",
    age: 40,
}


displayPerson(person2);

// in the above we give job value by default unemployed