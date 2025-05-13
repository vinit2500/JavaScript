// now parent has become higher order function.
// HOF => ya to function ko as an argument le ya to return kre
// clousure => jb bhi hum outer(parent) function se inner(child) function ko return krte hai aur us
// outer function ke kch variables ko inner function mai use krte hai aur us outer function se
// inner function ko return krwa dete hai to keval woh function return nhi hota uske jitne variable ko
// apn ne use kiya hai woh sare variable bhi return ho jate hai
//

function outer() {
  const a = 4;
  function parent() {
    const b = 6;
    function add() {
      console.log(a + b);
    }
    return add;
  }
  return parent();
}

const add1 = outer();
// ye add1 ke sath scope bhi aata hai
console.dir(add1);
