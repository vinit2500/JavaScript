debugger

const username = "Vinit"
let userage = 25
var a = 80;

function add() {
    const x = 5
    const y = 8
    console.log( x + y);
    console.log(username)
}

function subtract() {
  const x = 5;
  const y = 8;
  console.log(x - y);
  console.log(username);
}

add()
subtract()

console.log("Progarm ended")

// let and const wale variable script scope mai aate hai 
// var wale global(window object mai) scope mai 

// gobal scope do category mai define hot hai 
// 1) window object 
// 2) script scope  ye dono ke andr jo variable hoge unko apne program mai khi bhi access kr skte hai


// we can access variable present in global(var variable) like window.a 
// but not in case of let and const like window.username or window.userage
//  we can also do window.add()