// NodeList = Static collection of HTML elements by (id, class, element)
//            Can be created by using querySelectorAll()
//            Similar to an array, but no (map, filter, reduce)
//            NodeList won't update to automatically reflect changes


let buttons = document.querySelectorAll(".myButtons");

// REMOVE AN ELEMENT

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
    })
})


// ADD AN ELEMENT

// const newButton = document.createElement("button"); // STEP 1
// newButton.textContent = "Button 5"; // STEP 2
// newButton.classList = "myButtons";
// document.body.appendChild(newButton); // STEP 3

// buttons = document.querySelectorAll(".myButtons");

// console.log(buttons);



// MOUSEOVER + MOUSEOUT event listener
// => we are going to add event listener for  mouseover and mouseout

// buttons.forEach(button => {
//     button.addEventListener("mouseover", event => {
//         event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
//     });
// });

// buttons.forEach(button => {
//     button.addEventListener("mouseout", event => {
//         event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
//     });
// });



// CLICK event listener
// => we are going to add event listener to each button that will listen for a click.

// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.style.backgroundColor = "tomato";
//     })
// })



// ADD HTML/CSS PROPERTIES

// buttons.forEach(button => {
//     button.style.backgroundColor = "green";
//     button.textContent += "🤧"
// })