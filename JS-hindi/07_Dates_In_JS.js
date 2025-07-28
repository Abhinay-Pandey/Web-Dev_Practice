//Dates
// let myDate=new Date()//date object instance
// console.log(myDate.toString());//changing the format to string for readablilty
// console.log(myDate.toDateString());// prints only date day and year
// console.log(myDate.toTimeString());//prints local time in 24-hr format
// console.log(myDate.toLocaleDateString());//prints date in DD-M-YYYY format
// console.log(myDate.toLocaleString());//date and time in 12hr format

// console.log(typeof myDate);

// let myCreatedDate= new Date(2023,0,23)//print custom date time month starts from 0
// let myCreatedDate= new Date(2023,0,23,5,3)//formatting using date and time
let myCreatedDate= new Date("2023-01-14")//formating custom output
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now()


// console.log(myTimeStamp);// cureent time in miliseconds
// console.log(myCreatedDate.getTime());// get time in mili seconds from starting from time

console.log(Math.floor(Date.now()/1000));//to convert in seconds


let newDate= new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);// to get current month
console.log(newDate.getDay());// to get current month

// console.log(` Day 1  ${newDate.toString()} and the time is `)

console.log
(newDate.toLocaleString('default',
    {weekday:"long"
        
    }));//customize the date and time format in