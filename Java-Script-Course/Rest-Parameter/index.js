// rest parameters = represents an identifinite number of parameters (packs arguments into an array)

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, b, c, d, e));

function sum(a, b, ...numbers) {
    let total = 0;
    for(let number of numbers) {
        total += number
    }
    return total;
}

//=> in the top we have function called sum(a, b, ...numbers) it means instead of taking a, b rest will be take and execute.