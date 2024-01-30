// Variable Scope = where a variable is recognized and accessible (local vs global).

// local => we declare a variable inside a function and we will access eg:

/*func1();
func2();

function func1() {
    let x = 1;
    console.log(x);
}

function func2() {
    let y = 2;
    console.log(y);
}*/

// global = we declare a variable outside of a function and we will access eg:

let x = 3; 

func1();
func2();

function func1() {
    let x = 1;
    console.log(x);
}

function func2() {
    let y = 2;
    console.log(y);
}    