const months = ['january', 'febuary', 'march', 'april', 'may', 'june', 'December']

// create 5 size of array with undefind
// months.map((month) => {
//   console.log(month)
// })

// now returns array of month with upper case 
// const monthArray = months.map((month, index,wholeArray) => {
//   console.log(month, "Index = ", index, "Array= " , wholeArray);
//   return month.toUpperCase()
// });

// console.log(monthArray)

const filterMonths = months.filter((month, index, wholeArray) => {
//  console.log(month, "Index = ", index, "Array= ", wholeArray);
  return month.toLowerCase().includes('m') //if true returns everything and if false return  nothing (boolean condition likhte hai yha)
})

const filterMonths1 = months.filter((month, index, wholeArray) => {
//  console.log(month, "Index = ", index, "Array= ", wholeArray);
  return index>=3
});


// console.log(filterMonths)

const students = [
  {
    name: "Akash",
    age: 12,
  },
  {
    name: "Rohan",
    age: 76,
  },
  {
    name: "Sohan",
    age: 23,
  },
  {
    name: "Surjit",
    age: 16,
  }
];

const filterStudent = students.filter((student)=> {
  return student.age >=18 // if return true and returns all student 
})

// console.log(filterStudent)


const adultStudentsName = filterStudent.map((student) => {
    //  return "Vinit" //return Vinit every time 
    return student.name
})


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// REDUCE 

const nums = [1,2,1,1,1,1]

nums.reduce((accumulator, currvalue, index, array) => {
   console.log(accumulator)
   return currvalue //  return 'Vinit' 
}, 10) //10 is initial value by default if we do not give it is 0


const sum = nums.reduce((acc, curr, index, array) => {
  console.log("Acc value = ", acc, " and curr value", curr, "few", array)
  return acc + curr;
},0)

console.log("Sum is "+ sum);




