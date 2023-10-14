let  a  = "33uu"
let b = Number(a)

console.log(typeof a)  
console.log(typeof b) // it shows the type of number

console.log(a)
console.log(b) // it gives NaN 

// for Number:
let c = null
console.log(typeof c)
console.log(Number(c))

// for Boolean:
let logedIn = "";
let booleanLogedIn = Boolean(logedIn)
let boolNull = Boolean(c)
console.table([logedIn,booleanLogedIn,boolNull])

// for String:
let n = 333;
let xyz = String(n)
console.table([xyz,typeof xyz])

let bigInt = BigInt(12333333333388888888888888888881111111111111111111133333333333333333333);
console.log(typeof bigInt)
