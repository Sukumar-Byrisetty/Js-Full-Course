// date Objects => Objects that contain values that represents dates and times 
//                 These date objects can be changed and formatted

// => would like to create your own custom "date" and "time" object you'll have to pass some arguments

// => we can compare dates as well 

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if(date2 > date1) {
    console.log("HAPPY NEW YEAR!");
}
else {
    console.log("Normal Day")
}


/*const date = new Date();

date.setFullYear(2024);
date.setMonth(4);
date.setDate(26);
date.setHours(8);
date.setMinutes(30);
date.setSeconds(0);

console.log(date);*/


/*const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek = date.getDay();


console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayOfWeek);*/


/*const date = new Date("2000-05-27T08:30");

console.log(date);*/


// => would like to create your own custom "date" and "time" object you'll have to pass some arguments


/* //Date(Year, month, day, hour, minute, second, ms)

const date = new Date(2000, 4, 26, 8, 30, 0, 0);

console.log(date);*/