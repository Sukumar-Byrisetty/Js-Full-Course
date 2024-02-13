// static = keyword that defines properties or methods that belong
//          to a class itself rather then the objects created
//          from that class (class owns anything static, not the objects)

class User {

    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }

    static getUserCount() {
        console.log(`Ther are ${User.userCount} users online`);
    }
    
    sayHello() {
        console.log(`Hello, my username is ${this.username}`);
    }
} 

const user1 = new User("Virat");
const user2 = new User("Dhoni");
const user3 = new User("Pandya");

user1.sayHello();
user2.sayHello();
user3.sayHello();
User.getUserCount();


// class MathUtil {
//     static PI = 3.1459;

//     static getDiameter(radius) {
//         return radius * 2;
//     }
//     static getCircumference(radius) {
//         return 2 * this.PI * radius;
//     }
//     static getArea(radius) {
//         return this.PI * radius * radius;
//     }

// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.getArea(10));