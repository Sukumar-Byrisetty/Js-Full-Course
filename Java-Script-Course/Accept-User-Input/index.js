//How to accept user input

// EASY WAY with a window prompt

// let username = window.prompt("What is your name?");
// console.log(username);

// DIFFICULT WAY HTML textbook

let username;

document.getElementById("myButton").onclick = function() {

    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " + username;
}