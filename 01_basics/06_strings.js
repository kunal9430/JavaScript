 const name = "kunalkumarr";  // 1st way of declartion
 repoCount = 40;
 console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
console.log(name[0]);
console.log(name.length);
console.log(typeof name)

const name1 = new String("Kunal");  // second way of declaration
console.log(typeof name1);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//strings methods in javascript
console.log(name1.__porto__)
console.log(name1.length)
console.log(name1.toUpperCase()) // this doesn't changes the original value because it is created in stack hence its copy is changed and it's original value remains the same
console.log(name1.charAt(3));
console.log(name1.indexOf('n'));

const gameName = name.substring(0,4);
console.log(gameName);

const game = name.slice(-8, -1);
console.log(game + " how is this possible");

const newStringOne = "      kunal      ";
console.log(newStringOne);
console.log(newStringOne.trim())
console.log(newStringOne.trimEnd())
console.log(newStringOne.trimStart())

const url = "https://kunal.com/kunal%20kumar"
console.log(url.replace('%20',''))
console.log(url);

const age = "kunal se jake pucho";
console.log(age.includes('kunal'));

const s = "my name is kunal kumar";
console.log(s.split(' '));
console.log(s.split(' ',3)) // generate an array of length 3

// Questions of 4way technology: ODD Group //
let input = "mystrings";
console.log(input);
let count = 0;
let arr = input.split('');
console.log(arr);
for(let i = 0; i<arr.length; i++){
    if(arr[i]=='s'){
        count++;
    }
}
console.log(count);
input = input.replaceAll('s','');
arr = input.split('');
console.log(arr);

