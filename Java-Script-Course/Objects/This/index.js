// this = reference to the object where THIS is used
//        (the object depends on the immediate context)
//        person.name = this.name


const person1 = {
    name: "Virat Kohli",
    favFood: "Pizza",
    sayHello: function() { console.log(`Hi! I am ${this.name}`)},
    eat: function() { console.log(`${this.name} is eating ${this.favFood}`)},
}

const person2 = {
    name: "Yusuf Pathan",
    favFood: "Burger",
    sayHello: function() { console.log(`Hi! I am ${this.name}`)},
    eat: function() { console.log(`${person2.name} is eating ${person2.favFood}`)},
}


person1.sayHello();
person2.eat();

// this keyword doesn't work with arrow function.