const fruits = ["banana", "apple", "peach", "mango", "graphes"];


// fruits.forEach(function(){
//    //jitne array ke elements hai utni br isko call krega
//    console.log('Hi');
// })


//foreach is function or method 
//foreach is higher order function 
fruits.forEach(function (fruit) {
  console.log(fruit);
});

//for each returns undefined 
const undefin = fruits.forEach((fruit)=> {
  console.log("Fruit is ", fruit);
  return fruit.toUpperCase()  //kch bhi return krwao undefined hi return hoga 
})

console.log(undefin)
function abc(el) {
  console.log(el)
}


fruits.forEach(abc)