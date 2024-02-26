// Error = An Object that is created to represent a problem that occurs
//         Occurs often with user input or establishing a connection

// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { }  = (optional) Always executes. Used mostly for clean up
//                ex. close files, close connections, release resources

try {
    const dividend = Number(window.prompt("enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    if(divisor == 0) {
        throw new Error("You can't divide by zero");
    }
    if(isNaN(dividend) || isNaN(divisor)) {
        throw new Error("Values must be a number");
    }

    const result = dividend / divisor;
    console.log(result);
}
catch(error) {
    console.error(error);
}

console.log("Yoou have reached the end!");



/*try {
    console.log("Hello");
    // NETWORK ISSUES
    // PROMISE REJECTION
    // SECURITY ERRORS
}
catch(error) {
    console.error(error);
}
finally {
    // CLOSE FILES
    // CLOSE CONNECTIONS
    // RELEASE RESOURCES
    console.log("This always executes");
}

console.log("You have reached the end!");*/


/*console.log(X);

console.log("You have reached the end!");

// => in the above we have reference error beacause x is not defined we get uncaught reference error and it interrupts our program we never reach the end. erros can be generated for all sorts of issues such as 
// NETWORK ISSUES
// PROMISE REJECTION
// SECURITY ERRORS

// => to handle above errors when they occur we can do that with try catch and finally blocks.*/



/*console.lag("Hello");

console.log("You have reached the end!");

// => in the above i spell log to lag it encounters error. console.lag is not a function. type errors tend to happen when we try to access something with in object that doesn't exist */