// eventListener = Listen for spesific events to create interactive web pages
//                 events: click, mouseover, mouseout
//                 .addEventListener(event, callback, anonymous function arrow funtion);

// -------------- mouseout event ---------

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

myButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightblue";
    myBox.textContent = "Click ME 😃";
})



// -------------- mouseover event ---------

// const myBox = document.getElementById("myBox");

myButton.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it 😲";
})



//---------- Click Event ------------

// const myBox = document.getElementById("myBox");

myButton.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH 🤕";
});


/*const myBox = document.getElementById("myBox");

myBox.addEventListener("click", function(event) {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH 😫";
})*/


/*const myBox = document.getElementById("myBox");

function changeColor(event) {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH 😒";
}

myBox.addEventListener("click", changeColor);*/
