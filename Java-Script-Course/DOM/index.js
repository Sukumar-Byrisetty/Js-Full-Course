// DOM = DOCUMENT OBJECT MODEL
//       Object{} that represents the page you see in the web browser
//       and provides you with an API to interact with it.
//       web browser constructs the DOM when it loads an HTML document,
//       and structures all the elements in a tree-like representation.
//       JavaScript can access the DOM to dynamically 
//       change the content, structure, and style of a web page.

const username = "";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? `Guest` : username;

console.dir(document);

/*document.title = "My Website"
document.body.style.backgroundColor = "hsl(0, 0%, 10%)";

console.dir(document);// => using dir it will list all of the properties of document*/


//console.log(document); // => it shows html document