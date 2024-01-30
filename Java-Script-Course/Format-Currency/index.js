//toLocaleString() = returns a string with a language sensitive representation of this

// number.toLoacaleString(locale, {options});

// 'locale' = specify that language (undefined = default)
// 'options' = object with formatting options


/*let myNum = 123456.789;

//myNum = myNum.toLocaleString("en-US"); // US English
//myNum = myNum.toLocaleString("hi-IN"); // hindi
//myNum = myNum.toLocaleString("de-DE"); // standard German

//myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
//myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
//myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"});

console.log(myNum);*/

let myNum = 100;

//myNum = myNum.toLocaleString(undefined, {style: "percent"});
myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});

console.log(myNum);

