

const username = "Vinit"
let userage = 25
var a = 80;

function subtract() {
  debugger;
  const x = 5;
  const y = 8;
  const z = 18
  var insideSubstract = 23
  console.log(x - y);
  console.log(username);

  function child() {
    const childName = 'Golu'
    console.log(childName);
    console.log(x, z);

    {
      const num1 = 78;
      console.log(num1);
    }

    if (true) {
       num2 = 987
    }
     console.log(num2);
    function grandChild() {
      const grandChildName = 'Molu'
      console.log(grandChildName);
    }
    grandChild()
    // console.log(grandChildName)
  }
  child()
  console.log(num2)
}
num2 = 34 // direct windw object mai jaega to prevent it use 'use strict' 
//inner funtion mai outer function ke variable ko use krte hai to inner function ek closure 
// bna leta hai 
//global and script scope ek hi hota hai 

subtract()

console.log("Progarm ended")
