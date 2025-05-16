const nums1 = [1,2,3,4]
const nums2 = [5,6,7,8,9]


const myName = "Vinit";

//first way otherwise use concat(old)
const joinArray = [...nums1, ...nums2, ...myName,10,11,2]
// [(1, 2, 3, 4, 5, 6, 7, 8, 9, "V", "i", "n", "i", "t")


// const user = {
//    name:'vinit',
//    age:23
// }

// const updatedUser = {...user, city:'Indore'}

function add() {
   let sum = 0  
   
   for(let i=0;i<arguments.length;i++) {
      sum+=arguments[i]
   }
   return sum
}

console.log(add(...[12, 4, 5, 8]));
// add(...user1) //Error only array and string we can pass
