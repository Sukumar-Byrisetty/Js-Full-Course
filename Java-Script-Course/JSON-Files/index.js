// Json = (JavaScript Object Notation) data-interchange format 
//        Used for exchanging data between a server and a web application
//        JSON files {key:value} OR [value1, value2, value3]

//        JSON.stringfy() = converts a JS object to a JSON string.
//        JSON.parse() = converts a JSON string to a JS object

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.name)))
    // .catch(error => console.error(error))


/*// => in the above parse() coverts js string into object

const jsonNames = `["Sukumar", "Muni", "Ravi", "Chenchu"]`;
const jsonPerson = `{"name": "Sukumar", "age": 23, "isEmployed": true, "hobbies": ["PlayingCricket", "Cooking", "Singing"]}`;
const jsonPeople =`[{"name": "Sukumar", "age": 23, "isEmployed": false},
                    {"name": "Muni", "age": 28, "isEmployed": true},
                    {"name": "Ravi", "age": 24, "isEmployed": true},
                    {"name": "Chenchu", "age": 23, "isEmployed": false}]`;

const parsedData = JSON.parse(jsonPeople);

console.log(parsedData);*/



/*// => in the above stringfy coverts js object into string.

const names = ["Sukumar", "Muni", "Ravi", "Chenchu"];

const person = {
    "name": "Sukumar",
    "age": 23,
    "isEmployed": true,
    "hobbies": ["PlayingCricket", "Cooking", "Singing"]
};

const people = [{
    "name": "Sukumar",
    "age": 23,
    "isEmployed": false
},
{
    "name": "Muni",
    "age": 28,
    "isEmployed": true
},
{
    "name": "Ravi",
    "age": 24,
    "isEmployed": true
},
{
    "name": "Chenchu",
    "age": 23,
    "isEmployed": false
}]



const jsonString = JSON.stringify(people);

console.log(jsonString);*/