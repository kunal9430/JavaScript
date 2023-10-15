// "use strict"; // treat all js code as newer version

// // alert(3+3); 

// console.log(typeof(undefined))
// console.log(typeof null);
// let kunal = null;
// console.log(kunal)
// console.log(typeof kunal)


// // JavaScript has 8 Datatypes
// // 1. String
// // 2. Number
// // 3. Bigint
// // 4. Boolean
// // 5. Undefined
// // 6. Null
// // 7. Symbol
// // 8. Object

// // The Object Datatype
// // The object data type can contain:

// // 1. An object
// // 2. An array object
// // 3. A date object
// // 4. Function object



// // Numbers:
// let length = 16;
// let weight = 7.5;

// // Strings:
// let color = "Yellow";
// let lastName = "Johnson";

// // Booleans
// let x = true;
// let y = false;

// //Symbol
// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId) //false

// //BigInt
// const bigNumber = 44444444444444444422222222222n
// console.log(typeof bigNumber)

// // Object:
// const person = {
//     firstName:"John", 
//     lastName:"Doe"
// };

// // Array object:
// const cars = ["Saab", "Volvo", "BMW"];

// // Date object:
// const date = new Date("2022-03-25");

// //Functions(it is also considered as variable in javaScript)
// const myFunction = function(){
//     console.log("Hello world")
// }
// console.log(typeof myFunction)


// //every thing inside a curly brase can be treated as an object
// console.log(typeof {name: "Kunal Kumar",age:23})


//****************************************************//(Memory concept in javascript)

//stact(primitive), heap(non-primitive)

let myYoutubeName = "UBsingh";
let anotherName = myYoutubeName;
console.table([myYoutubeName,anotherName])

anotherName = "nameChange kar raha diye" // ye srif anotherName ki value ko chande karega because isko myYoutubeName ka copy diya gya tha, refrence nhi diya gya tha, aur aisa isiliye because myYoutubeName ek primitive datatype h isiliye ye stack me store hoga aur stack me store hone wale varibales ka copy pass kiya jata h na ki refrence
console.table([myYoutubeName,anotherName])


let user = {
    email: "kunalkumarh203@gmail.com",
    name: "kunal",
    age: 22,
}

let user2 = user;
user2.email = "meghasah1799@gmail.com" // ye user and user2 dono ke email ko update kar dega because yaha pe user2 ke pass user ka refrence h aur aisa isiliye because user is created in heap because it is a non-primitive datatype

console.log(user);
console.log(user2);