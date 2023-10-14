//**************** OPERATORS ******************

// arithmetic: +, -, *, **, /, %, ++, --
// assignment: =, +=, -=, *=, /=, %=, **=
// comparison: ==, ===, !=, !==(not equal value not equal data type), >, <, >=, <=, ?
// string: <, >, +,
// logical: &&,||,!
// type: typeof, instanceof
//bitwise: &, |, ~, ^, <<, >>, >>>(unsined right shift)

console.log("1"+2+2); // 122
console.log(1+2+"2"); // 32
console.log(+true) // 1
console.log(+"") // 0

let num1, num2, num3;
num1 = num2 = num3 = 3+3;
console.table([num1,num2,num3])