function add() {
  // console.log(arguments[0]);
  // console.log(arguments[1]);
  // console.log(arguments[2]);
  let sum = 0;
  for(let i=0; i<arguments.length; i++) {
    console.log(arguments[i])
    sum+=arguments[i]
  }
  console.log("Total sum is ", sum)
}


//Note => arguments keyword is not present in arrow function 