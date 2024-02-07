// nested objects = Objects inside of other Objects.
//                  Allows you to represent more complex data structures
//                  Child Object is enclosed by a Parent Object

//                  Person{Address{}, ContactInfo{}}
//                  ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

class Person {

    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address {

    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Virat Kohli", "30", "124 Church street", 
                                                "Mumbai", 
                                                "India");

const person2 = new Person("MS Dhoni", "30", "125 Church street", 
                                                "Mumbai", 
                                                "India");

const person3 = new Person("Yusuf Pathan", "30", "126 Church street", 
                                                "Mumbai", 
                                                "India");

console.log(person1.name);       
console.log(person2.age);                                                
console.log(person3.address.city);



// => if you would like to loop through the proprties of a nested object you can write a for loop like this

/*const person = {
    fullName: "Virat Kohli",
    age: 30,
    isCricketer: true,
    hobbies: ["Playing Cricket", "Singing", "Dancing"],
    address: {
        street: "124 Church Street",
        city: "Mumbai",
        country: "India"
    }
}

for(const property in person.address) {
    console.log(person.address[property]);
}*/



/*const person = {
    fullName: "Virat Kohli",
    age: 30,
    isCricketer: true,
    hobbies: ["Playing Cricket", "Singing", "Dancing"],
    address: {
        street: "124 Church Street",
        city: "Mumbai",
        country: "India"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isCricketer);
console.log(person.hobbies[1]);
console.log(person.address.country);*/

// when accessing a property within a nested object you have to use the property accessor(.) twice