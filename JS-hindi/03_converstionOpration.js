let score ="33abc"//if in double quotes is string
console.log(typeof score)//by using typeof
console.log(typeof(score))// as an method

//this values is sting but we want in number

let valueInNumber=Number(score)//store the score in new variable for coverstion
console.log(typeof valueInNumber);//changes string to number 

// how 33abc is number ? so we will check what value is converted

console.log(valueInNumber);//output is NaN (not a number) a special data type

// let new1=null//now null is stored
// let new2=Number(new1) // change the type to number
// console.log(typeof new2);//gives type to data as number 
// console.log(new2);// shows the null value is stored as 0 how?

//the value is undefined is NaN

//is the value is true then the converstion is 1 and false is 0

let isLoggedIn=1

let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//  1=>true; 0=> false
// " " empty space is false 
//"hitesh is true don't know why "

let someNumber=33

let StringNumber=String(someNumber)
console.log(typeof StringNumber);

//*******oprations**************/
let value=3
let negValue=-value
console.log(negValue);

//console.log(2+2);
//console.log(2-2);
//console.log(2+2);
//console.log(2**3);
//console.log(2/3);
//console.log(2%3);

let str1="hi"
let str2=" Abhinay"
let str3=str1+str2 //these are some basic concat

console.log(str3);

console.log("1"+2);//here concat is happning b/c 1 is treated as string
console.log(1+"2");//same here

console.log("1"+2+2);//here the first value type is string "1" and is concatinated and that applies to all

console.log(1+2+"2");// here the first to addition fuctions then

console.log(+true);//boolean converstion is happing 

let num1,num2,num3
num1=num2=num3=2+2


let gameCounter=100
// gameCounter++
// console.log(gameCounter);// value incresed and then saved
++gameCounter
console.log(gameCounter);







