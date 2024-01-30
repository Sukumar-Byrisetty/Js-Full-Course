// function = Define code once, and use it many times. To perform some code, call the function  name.

startProgram();

function startProgram(){
    let userName = "Sukumar";
    let age = 23;

    happyBirthday(userName, age);
}

function happyBirthday(userName, age) {
    console.log("happy birthday to you!");
    console.log("happy birthday to you!");
    console.log("happy birthday dear", userName);
    console.log("happy birthday to you!");
    console.log("you are", age, "years old!");
}