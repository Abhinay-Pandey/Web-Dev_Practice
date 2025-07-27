const score=400
// console.log(score);// automatically define the number and


// if we want strictly number data type

const balance =new Number(100)//new Number keyword specifically create number 
// console.log(balance);
// also very few properties or prototypes are available for Number type

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));// it decides no of decimal digits after the deimal will be shown

const otherNumber=123.8996
// console.log(otherNumber.toPrecision(4));// how many decimal precision i want  like round off etc

const hundreds=1000000
// console.log(hundreds.toLocaleString());//it helps to divide value in , comma (USD)
// console.log(hundreds.toLocaleString('en-IN'));//it helps to local value in , comma (indian)


//==================Math=========================================
// console.log(Math);

// console.log(Math.abs(-4));//returns a non negative number
// console.log(Math.round(4.2));//makes value round off like 4
// console.log(Math.ceil(4.2));//choose the upper value in decimal like 4.2->5
// console.log(Math.floor(4.3));// chooses the lower value in decimal like 4.7->4
// console.log(Math.min(4,6,8,4,2,16,32,0,44));//finds minimum in array
// console.log(Math.max(4,2,78,145,15,2,32,49,5));//finds maximum in arrary

console.log(Math.random());//always changing but always b/w 0 and 1
console.log((Math.random()*3)+1);//always changing but always equal to N 
console.log(Math.floor(Math.random()*10) + 1);//always changing but always 1 or grater but withour decimal
console.log(Math.trunc(-4.2455));//only delete the decimal part

//formula for limiting random numbers

const min=1
const max=6

console.log(Math.floor(Math.random()*(max-min+1)+min));
















