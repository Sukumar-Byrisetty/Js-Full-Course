// Variable scope = where a variable accessible

// let = variables are limited to block scope {}
// var = varibales are limited to a function(){}

// global variable = is declared outside any function
// (if global, var will CHANGE browser's window properties)

doSomething();

function doSomething() {
    for(let i = 1; i <= 5; i+=1){
        console.log(i);
    }
}

