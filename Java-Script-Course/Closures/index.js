// Closures = A function defined inside of another function,
//            the inner function has access to the variables
//            and scope of the outer function.
//            Allow for private variables and state maintenance
//            Used frequently in JS frameworks: React, Vue, Angular

function createGame() {

    let score = 0;

    function increaseScore(points) {
       score += points;
       console.log(`+${points}pts`);
    }

    function decreaseScore(points) {
       score -= points;
       console.log(`-${points}pts`);
    }
    
    function getScore() {
    return score;
    }

    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();

game.increaseScore(5); game.increaseScore(4);
game.decreaseScore(2);

console.log(`The final score is ${game.getScore()}pts`);


/*function createCounter() {

    let count = 0;

    function increment() {
        count++;
        console.log(`Count increased to:${count}`);
    }

    function getCount() {
        return count;
    }

    return{increment, getCount};
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(`The current count is: ${counter.getCount()}`);*/


/*function increment() {
     let count = 0;
     count++;
     console.log(`Count increased to:${count}`)
}

increment();*/


/*function outer() {

    let message = "Hello";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();

// => one benefit of using closures is that any variables are considered private.*/