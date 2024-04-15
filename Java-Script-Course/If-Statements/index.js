// if statement = if the condition is true statement block will be executed otherwise not executed.

// let age = 65;

// if(age >= 75) {
//     console.log("You are a senior citizen!");
// }
// else if(age >= 85) {
//     console.log("You are an adult!");
// }
// else if(age < 60) {
//     console.log("YOU HAVEN'T BEEN BORN YET!");
// }
// else {
//     console.log("you are a child!")
// }

// let online = false;

// if(online) {
//     console.log("You are online!");
// }
// else {
//     console.log("You are offline!");
// }

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let age;

mySubmit.onclick = function() {

    age = myText.value;
    age = Number(age);

    if(age >= 100) {
        resultElement.textContent = "You are TOO OLD to eneter this site";
    }
    else if (age == 0) {
        resultElement.textContent = "You can't enter. you are not born yet";
    }
    if(age >= 18) {
        resultElement.textContent = "You are old is enough to enter this site";
    }
    else if(age < 0) {
        resultElement.textContent = "You are age can't be below 0";
    }
    else {
        resultElement.textContent = "You must be 18+ to enter this site";
    }
}