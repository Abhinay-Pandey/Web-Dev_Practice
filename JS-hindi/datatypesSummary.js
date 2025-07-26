// primitive (they are call by value)
//cause save in copies

//7 types :String,Number,Boolean,null,undefined,Symbol,
// BigInt

//JS is a dynamically type language
const score=100
const scoreValue=100.3//both a data type as number

const isLoggedIn=false//simple boolean type
const outSideTemp=null//null type data 
let userEmail;//leave the value undefine
let userEmail2=undefined//manual undefined

//to declare the the unique id using symbol

const id =Symbol('123')
const anotherId=Symbol('123')


console.log(id===anotherId);

const bigNumber=3566515654644652126151n


//Refrence (Non-primitive)

//Array,Objects,Functions

const heros=["shatiman","naagraj","doga"]//array declaration

//objects are in {curly braces}, written as object values pair ex:


let myObj={
    name:"Abhinay",
    Age:22,
} 

// //function declaration
// function(){

// }

const myFunction=function () {
    console.log("Hello World")
}

console.log(typeof bigNumber);//givs O/P Bigint

console.log(typeof myFunction);// function give return type as function




