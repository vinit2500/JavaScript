//Array is also object internally

typeof [] //object
typeof {} //object 
typeof ['Apple', 'Banana', 'Graphes', 'Dates'] //object

typeof [].concat // function but there is no function datatype in javascript 
//function, array and object teeno non-primitive type hai teeno mai woh kr skte hai 
//jo ek object ke sath kr skte hai

const fruits = ['Apple', 'Banana', 'Graphes', 'Dates' , 23, null, undefined, true, {name:"Vinit", as : {age:44}}]
fruits[2] = 'Mango'
fruits[3] = 'Orange'
fruits[4] = 'Water melon'
// fruits[44] = 'Papaya' //it will add on 44th index beech ke undefined rhege 

//add 
fruits.push('Sitafal')
//add multiples value at a time
fruits.push('value1','value2','value3')

fruits.pop() //removes last element

// fruits = {} 
//function, array and object teeno non-primitive type hai teeno mai woh kr skte hai 
//jo ek object ke sath kr skte hai


const newArray = []
newArray.firstName = "Vinit" // not recommend
console.log(newArray)
// but then 
newArray.length // 0

