// slice () extracts a section of a string 
//            and returns it as a new String,
//            without modifying the original String.

let fullName = "Sukumar Byrisetty";
let firstName;
let lastName;

// firstName = fullName.slice(0, 4);
// lastName = fullName.slice(8);

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);


console.log(firstName);
console.log(lastName);

