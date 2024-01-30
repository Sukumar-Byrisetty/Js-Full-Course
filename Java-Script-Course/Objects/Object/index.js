// object = A collection of related properties and/or methods 
//          Can represent real world objects (people, products, places)
//          object = {key:value, 
//                    function()}

const person1 = {
    firstName: "Sukumar",
    lastName: "Byrisetty",
    age: 30,
    isEmployed: true,
    sayHello: function() {console.log("Hi! I am Sukumar!")},
    eat: function() {console.log("I am eating a chicken")},
}

const person2 = {
    firstName: "Virat",
    lastName: "Kohli",
    age: 40,
    isEmployed: false,
    sayHello: () => console.log("Hi! I am Virat....!"),
    eat: () => console.log("I am eating a chicken, fish and egg"),
}

person1.sayHello();
person1.eat();
person2.sayHello();
person2.eat();


/*console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);*/


// objects(person1, person2) can't have the same name. objects need diffrent names