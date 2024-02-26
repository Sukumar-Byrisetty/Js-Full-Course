// element selctors = Methods used to target and manipulate HTML elements 
//                    They allow you to select one or multiple  HTML elements
//                    from the DOM (Document Object Model)      

// 1. document.getElementById()              // ELEMENT OR NULL
// 2. document.getElementsByClassName()      // HTML COLLECTION
// 3. document.getElementsByTagName()        // HTML COLLECTION
// 4. document.querySelector()               // ELEMENT OR NULL
// 5. document.querySelectorAll()            // NODELIST

const foods = document.querySelectorAll("li");

foods.forEach(food => {
    food.style.backgroundColor = "purple";
})

// => in the above it selects all the items in the list

// const vegetables = document.querySelectorAll("li");

// vegetables[5].style.backgroundColor = "pink";

// => in the above it selects items in list


// const fruits = document.querySelectorAll(".fruits");

// fruits[0].style.backgroundColor = "green";

// => in the above it selects from class[fruits] items as per index numbers you give


/*const element = document.querySelector("ul");

element.style.backgroundColor = "green";

//=> in the above it selects all elements in the list

// const element = document.querySelector("li");

// element.style.backgroundColor = "blue";

// => in the above it selects first element in the list

// const element = document.querySelector("h4");

// element.style.backgroundColor = "pink";

// =>in the above it will select only root element

// const element = document.querySelector(".fruits");

// element.style.backgroundColor = "lightgreen";

// => in the above queryselector selects only one element*/



/*const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

// for(let h4Element of h4Elements) {
//     h4Element.style.backgroundColor = "red";
// }

// for(let liElement of liElements) {
//     liElement.style.backgroundColor = "purple";
// }

// Array.from(h4Elements).forEach(h4Element => {
//     h4Element.style.backgroundColor = "yellow";
// })

// Array.from(liElements).forEach(liElement => {
//     liElement.style.backgroundColor = "blue";
// })*/



// const h4Elements = document.getElementsByTagName("h4");

// h4Elements[0].style.backgroundColor = "red";


/*const fruits = document.getElementsByClassName("fruits");

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
});


// const fruits = document.getElementsByClassName("fruits");

// for(let fruit of fruits) {
//     fruit.style.backgroundColor = "red";
// }*/


/*const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";*/


