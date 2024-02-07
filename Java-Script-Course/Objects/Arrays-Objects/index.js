// => Add a new object you can use the push method

const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37}];


//fruits.push({name: "grapes", color: "green", calories: "49"}); // => it will add ele

//fruits.pop(); // => it will remove last element    

// fruits.splice(1,3) // => it will remove certain indexes between index num u give;

// console.log(fruits);

// ------------- forEach() --------------

//fruits.forEach(fruit => console.log(fruit.color)); // => it will interact each elemen

// ------------ map() ------------------

// const fruitNames = fruits.map(fruit => fruit.name);
// const fruitColors = fruits.map(fruit => fruit.color);
// const fruitCalories = fruits.map(fruit => fruit.calories);

// console.log(fruitNames);
// console.log(fruitColors);
// console.log(fruitCalories);

// ------------ filter()------------ => it will return new array

// const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
// const lowCalories = fruits.filter(fruit => fruit.calories <= 100 );
// const highCalories = fruits.filter(fruit => fruit.calories >= 100 );

// console.log(yellowFruits);
// console.log(lowCalories);
// console.log(highCalories);

// ------------- reduce() -------------- => it will return single value

const maxFruit = fruits.reduce( (max, fruit) => 
                                fruit.calories > max.calories ?
                                fruit : max);

const minFruit = fruits.reduce( (min, fruit) => 
                                fruit.calories < min.calories ?
                                fruit : min);

console.log(maxFruit);
console.log(minFruit);                                


// => To access a property within an array of objects 

/*const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 60},
                {name: "banana", color: "yellow", calories: 105},
                {name: "grapes", color: "green", calories: 40},
                {name: "pineapple", color: "yellow", calories: 52}];

console.log(fruits[4].calories);*/                