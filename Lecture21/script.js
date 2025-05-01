const evenNumbers = [0,2,4,6,8, 10, 12, 14 ,16, 18, 20]
const animals = ["tiger" ,"dog", "cat", "rat", "snake", "Parrot"]

// evenNumbers.shift() not recommend because it shifts
// console.log(evenNumbers) //remove elements from starting 

// evenNumbers.unshift(0)  // add 0 to the front

const newArr = evenNumbers.concat(animals)
//evenNumbers and animals array will still same

evenNumbers.indexOf(10)  //return index of element if not exists returns -1
animals.indexOf('rat')  // case sentsitive if more than two rat exists returns first position index


animals.includes('cat')

animals.reverse() //reverse original array

animals.sort() // sort original array actual mai ye bhi alphabetically sort nhi krta hai

evenNumbers.sort() //sort alphabetically like 0,10,12,14,16..... not in use in case of numbers


// sclice and splice method









