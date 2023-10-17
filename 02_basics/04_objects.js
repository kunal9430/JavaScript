//creating objects using constructor

// const tinerUser = new Object(); // this is a singleton object
// const user = {}; //this is non singleton object 
// console.log(tinerUser);


// tinerUser.id = 12211;
// tinerUser.name = "Kunal Kummar";
// tinerUser["full name"] = "kunal kumar singh Rajput";
// tinerUser.isLoggedIn= false;
// console.log(tinerUser);

//merging objects
// const obj1 = {1:'a',2:'b'};
// const obj2 = {3:'c',4:'d'};
//type -1
// const obj3 = {obj1,obj2}; //gives object inside the object.
// console.log(obj3);
//type - 2
// const obj3 = Object.assign({},obj1,obj2);
// console.log(obj3);
// type-3
// const obj3 = {...obj1, ...obj2};
// console.log(obj3);


// keys, values and entries
// let mySymbol = Symbol("mySymbol");
// const user = {
//     name:"kunal",
//     age: 22,
//     gender:"male",
//     "full name": {
//         userfullname:{
//             firstname:"kunal",
//             lastname:"kumar",
//         }
//     },
//     [mySymbol] : Symbol("123"),
// }
// user.findTypeOf = function(){
//     console.log(this[mySymbol]);
// }



// const user = {

//     name:"kunal",
//     age: 22,
//     gender:"male",
//     "full name": {
//         userfullname:{
//             firstname:"kunal",
//             lastname:"kumar",
//         }
//     },
// }
// const arr1 = Object.keys(user);
// const arr2 = Object.values(user);
// const arr3 = Object.entries(user);
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// let check = user.hasOwnProperty('name');
// console.log(check);

//destructuring in javascript
let course = {
    coursename:"js in hindi",
    coursePrice:1233,
    courseInstructor:"kunal",
}

let {courseInstructor:instructor} = course;
console.log(instructor);

let {courseInstructor} = course;
console.log(courseInstructor);