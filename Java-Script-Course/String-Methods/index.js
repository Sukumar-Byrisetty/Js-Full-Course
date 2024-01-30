// usefull string properties & methods
// if type variable then add a Dot we have to access to a bunch of different properties and methods of this string.

let userName = "Sukumar Byrisetty    ";
let phoneNumber = "123-456-7890";

// console.log(userName.length);
// console.log(userName.charAt(15));
// console.log(userName.indexOf("k"));
// console.log(userName.lastIndexOf("r"));
// userName = userName.trim();
userName = userName.toLowerCase();
// userName = userName.toUpperCase();

phoneNumber = phoneNumber.replaceAll("0", "9");

console.log(userName);

console.log(phoneNumber);