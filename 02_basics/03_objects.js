//singlton
//Object.create

// object literals
// let user = {
//     name:"kunal",
//     age: 20,
//     "full name":"kunal kumar",
//     email:"kunalkumarh2003@gmail.com",
//     isLogedIn: false,
//     LastLogin:['mon','tue','fri'],
// }

// console.log(user);
// console.log(user.name);
// console.log(user["full name"]);

//to use symbol in object

let mysymb = Symbol("Name is the symbol");
let user = {
        name:"kunal",
        // symbol:mysymb,
        [mysymb]: "mykey1",
        age: 20,
        "full name":"kunal kumar",
        email:"kunalkumarh2003@gmail.com",
        isLogedIn: false,
        LastLogin:['mon','tue','fri'],
    }
    // console.log(typeof user.symbol)
    console.log(user[mysymb]);
    console.log(typeof user[mysymb]);
