// setTimeout() = function in JavaScript that allows you to schedule 
//                the execution of a function after an amount of the time
//                (milliseconds)
//                Times are approximate (varies based on the workload of the     
//                JavaScript runtime env.)

//                setTimeout(callback, delay);
//                clearTimeout(timeoutId) = can cancel a timeout before it triggers 

let timeoutId;

function startTimer() {
    timeoutId = setTimeout(() => window.alert("Hello"), 3000);
    console.log("STARTED");
}

function clearTimer() {
   clearTimeout(timeoutId);
   console.log("CLEARED")
}


// const timeout = setTimeout(() => {
//     window.alert("Hello");
// }, 3000);


/*setTimeout(() => {
    window.alert("Hey Hello:)");
}, 3000);*/


// setTimeout(function(){window.alert("Hello")}, 3000);


/*function sayHello() {
    window.alert("Hello")
}

setTimeout(sayHello, 3000);*/

