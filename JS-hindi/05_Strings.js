const name="hitesh"//string declaration
const repoCount=50//Number 

console.log(name+repoCount+"Value");//concatinate value but not used and redability issue
// to over come we use (``) backtiks
//and it provide string interpolation feature which
//helps to inject variable value directly

console.log(`hello my name is ${name} and my repor count is ${repoCount}`) ;

 const gameName=new String("Abhinay-ap")

 console.log(gameName[0]);// we can access the key value pair using the postion number of the object
console.log(gameName.__proto__);//this provide a lot methods or (prototype) using (.)oprater

console.log(gameName.length);

console.log(gameName.toUpperCase());// make the text upper case
console.log(gameName.charAt(2));

console.log(gameName.indexOf("a"));//finding no of text

const newString=gameName.substring(0,4)// making a substring and also don't include last element
console.log(newString);//like (0,4) but 4 not included

const anotherString=gameName.slice(-8,4)// similer to sub string but 
// here we can give negative values and it will print in reverse

console.log(anotherString);

const newString1="     hitesh   "//string with many spaces
console.log(newString1);
console.log(newString1.trim());// used to remove starting spaces and end spaces

const url="https://abhinay.com//Abhinay%20pandey" //change space to urln property

console.log(url.replace('%20','-'));//replace the value  fromt ehe given

console.log(url.includes('Abhinay'));// checks that strings belongs to the string or not

console.log(url.slice(2,5));//slice and take out the output of the range of the charecters 







