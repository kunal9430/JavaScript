// Dates

// let myDate = new Date();
// console.log(myDate);

// //converrt to string
// console.log(myDate.toString());
// console.log(myDate.toDateString()); //gives the day,date and month
// console.log(myDate.toLocaleString());  // gives the day,date,month and time

// console.log(myDate.toLocaleDateString()); // format the localeString in better format

// let myCreatedDate = new Date(2023,0,23);
// let myCreatedDate = new Date(2023,0,23, 5, 3);
// let myCreatedDate = new Date("2020-01-13"); // yy-mm-dd
let myCreatedDate = new Date("01-01-2023"); //mm-dd-yy
// console.log(myCreatedDate.toLocaleString());


// TIME STAMPs
// let myTimeStamp = Date.now();
// console.log(myTimeStamp); // time in milisecond
// console.log(myCreatedDate.getTime()); //convert in milisecond

//conversion from milisecond to second :
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getDate()); //gives the date
console.log(newDate.getDay()); // gives the day(mon =1)
console.log(newDate.getFullYear()); //gives the year
console.log(newDate.getMonth()); //gives the month(jan = 0)
console.log(newDate.getTime()); //gives the stored time value in milliseconds since midnight, January 1, 1970 UTC.

console.log(`Today is : ${newDate.getDate()} - ${newDate.getMonth()+1} - ${newDate.getFullYear()}`);

newDate.toLocaleString('defalult',{
    weekday: "long",
})