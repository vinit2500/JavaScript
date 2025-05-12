// console.log("Hi-1");

// function hello() {
//   console.log("hello world");
// }

// for(let i=0; i<=4 ;i++) {
//   console.log(i);
// }
// debugger
// hello()
// console.log("Hi-2");

//above code is syncronous code that execute line by line 

debugger
setTimeout(function() {
  console.log("Hi-3")
}, 0)


console.log("In last");


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log("Hi-1");

function hello() {
  console.log("Hello world");
}

setTimeout(function () {
  console.log("Anonomyous");
}, 3000);
setTimeout(hello, 1000);
setTimeout(hello, 2000);

for (let i = 1; i <= 2; i++) {
  console.log(i);
}
console.log("Hi-2");

//jo code sidha callstack mai nhi jata hai webAPI mai jata hai usko bolte hai asyncronous code.
//Event lopp check krta hai callstack khali hai kya khali haii to callback queue jo function 
// hai unko line by line queue mai wha bhejta hai 
// aur webapi se callbackqueue mai aata hai function


// synchronous code => jo direct call stack mai chala jata hai 
// asynchronous code => jo code webAPI section mai jata hai for wha se callback queue mai fir callstack mai 
