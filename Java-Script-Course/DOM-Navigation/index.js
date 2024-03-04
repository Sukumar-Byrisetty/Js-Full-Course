// Dom Navigation = The process of navigating through structure of an HTML
//                  document using JavaScript.

//.firstElementChild
//.lastElementChild
//.nextElementSibling
//.previousElementSibling
//.parentElement
//.children


// ------------- .children --------------------

const element = document.getElementById("fruits");
const children = element.children;

children[2].style.backgroundColor = "purple";

/*const element = document.getElementById("fruits");
const children = element.children;

Array.from(children).forEach(child => {
    child.style.backgroundColor = "yellow";
})*/

// ----------- .parentElement ------------------

// const element = document.getElementById("carrot");
// const parent = element.parentElement;
// parent.style.backgroundColor = "red";


// ----------- .previousElementSibling ---------

// const element = document.getElementById("cabbage");
// const previousElement = element.previousElementSibling;
// previousElement.style.backgroundColor = "violet";


// ----------- .nextElementSibling -------------

// const element = document.getElementById("fruits");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "red";

// => here fruits, vegetable and desserts all are siblings. thats why it select next to fruits(vegetables).
// => inside fruits, vegetables and desserts

// ----------- .lastElementChild ---------------

/* const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "green";
})

// const element = document.getElementById("fruits");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "red"; */


//------------ .firstElementChild --------------

/* const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "green";
})

// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "red"; */