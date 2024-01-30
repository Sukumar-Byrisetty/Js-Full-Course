// 2D array = An array of arrays

let fruits = ["bananas", "oranges","apples"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats = ["chicken", "eggs", "mutton"]

let groceryList = [fruits, vegetables, meats];

groceryList[2][1] ="fish";
groceryList[0][0] ="mangoes";

for(let list of groceryList) {
    for(let food of list) { // for display the individual elements in each array.
        console.log(food);
    }
}

// for(let list of groceryList) {
//     console.log(list);
// }