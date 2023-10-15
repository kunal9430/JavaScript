const score = 400;
console.log(score)

//explict declaration of number
const balence = new Number(1000);  //this will create a number object 
console.log(balence)

const num = 123.8946;
console.log(num.toFixed(3))
console.log(num.toPrecision(2))

console.log(Math.random())
console.log(Math.random()*10+1)
console.log(Math.floor(Math.random()*10)+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min)) + min);