//4 ways to declare variables in javascript
// var, let, const and without using var let and const


// if variable has no value then it is undefined
// we cannot redeclared a variable which is declared by using let and const

//variable decalared using var has global scope even if it is wirtten inside a block
// varialbe declared using let and const have block level scope


const accountId = 1222
let accountEmail = "kunalkkumar2Egmail.com"
var accountPassword = "1234"
accountCity = "jaipur"

console.table([accountId,accountEmail,accountPassword,accountCity]);


// variable declared with the var keyword is hoisted 
car= "supra"
var car;
console.log(car)

// variable declared with the let keyword is not hoisted
car1 = "lambo"
let car1 = "volvo";
console.log(car1)



//const keyword

const pi = 3.141;
console.log(pi)

// this will give an error because we cannot change the datatype when it is declared with const
//Always use const if the value should not be changed
//Always use const if the type should not be changed (Arrays and Objects)
//const declaration must be initialized


// const p; // type is undefined
p = 3.14; // type is number