// ------------- EXAMPLE 2 <li> ------------

// STEP 1 CREATE THE ELEMENT
const newListItem = document.createElement("li");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newListItem.textContent = "grapes";
newListItem.id = "grapes";
newListItem.style.fontWeight = "bold";
newListItem.style.fontSize = "2rem";
newListItem.style.backgroundColor = "lightgreen";

// STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newListItem);
// document.body.prepend(newListItem);
document.getElementById("fruits").append(newListItem);
// document.getElementById("fruits").prepend(newListItem);

// const orange = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem, orange);

// const listItems = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem, listItems[1]);

// REMOVE HTML ELEMENT
// document.getElementById("fruits").removeChild(newListItem)


// ------------- EXAMPLE 1 <h1> ------------

// STEP 1 CREATE THE ELEMENT
// const newH1 = document.createElement("h1");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
// newH1.textContent = "I like pizza!";
// newH1.id = "myH1";
// newH1.style.color = "tomato";
// newH1.style.textAlign  = "center"

// STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newH1); //=> append will display text at ending at the body
// document.body.prepend(newH1); // => prepend will display text at starting at the body
// document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);

// const box3 = document.getElementById("box3");
// document.body.insertBefore(newH1, box3)

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[2]);

// REMOVE HTML ELEMENT
// document.body.removeChild(newH1);
// document.getElementById("box1").removeChild(newH1);

