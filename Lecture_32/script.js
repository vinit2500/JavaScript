debugger

// console.log(a);

// const a = "Vinit"; //host to hua hai but woh temporal red zone mai hai jha pr access nhi kr skte 
// // temporal dead zone only in let and const 

// console.log(b);

// let b = "Solanki"

console.log(c);

var c = "This is hoisting"


hi(); //because memory craeation phase mai function aa jata hai aur apn usko code execution phase mai call kr rhe hai 
//function declaration 
//function defination
function hi() {
    console.log("Hello");
}

//function is hoist

sayHi() // can not do

//function expression 
//function defination both are functional defination
var sayHi = function() {
    console.log("Hi I am here");
}

// function() {
//     console.log("Hi I am here");
// } this part is known as anonymous function 
// isme memory creation phase mai undefined hoga pura function hoist nhi hoga 
// isliye sayHi() mai error aaega kyuki undefined ko call kiya hai like undefined()

//if we create function like this using const, let and var then it will be treatd as normal 
// variable that's why we can not do like sayHi() before

//function expression hoist nhi hoga 
