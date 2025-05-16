const evenNumbers = [0, 2, 4, 6, 2, 8]

// evenNumbers.some((num, index, array)=>{
//   console.log(num, index, array)
// })

evenNumbers.some((num, index, array) => {
  return "Vinit"  //return true if truthy value otherwise false like case of false is return null
});



const result = evenNumbers.some((num) => {
  return num > 4;  //agr ek bhi br true hua to overall true return krega  jb bhi true hoga return kr dega aage check nhi krega  
  // return num > 14 //return false finally 
});
//koi value match nhi hogi to aakhri mai false return hoga 
//actual use of some method
const isOddPresent = evenNumbers.some((num, index) => {
   return num%2 === 1;
});


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Every function => opposite as some function ek bhi false hua to pura false aur aage check nhi krega.

const resultOfEveryMethod = evenNumbers.every((num)=> {
  return (num%2===1)
})
//sari value match kregi tbhi true hoga result  

console.log(resultOfEveryMethod)