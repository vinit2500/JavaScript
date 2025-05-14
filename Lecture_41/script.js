//global memory ke andr create hoga
const fruits = ["banana", "apple", "peach", "mango", "graphes"];

// for(fruit of fruits) {
//     console.log(fruit);
// }

// for (var fruit of fruits) {
//   console.log(fruit);
// }
//memory ke andr abhi bhi hai fruit ki dono case mai

// for (const fruit of fruits) {
//   console.log(fruit);
// }

const user = "Vinit Solanki";

//we can not use for of loop on object
// for(const letter of user) {
//     console.log(letter);
// }

const person = {
  firstname: "John",
  lastname: "Doe",
  age: 50,
  eyeColor: "blue",
  city: "banglore",
};
//Error -> person is not iterable we will have to use for in loop
// for(const letter of person) {
//     console.log(letter);
// }

//thoda tha heavy hota hai 
// for (const key in person) {
//   console.log(key, " ", person[key]);
// }


//faster than above approach to traverse object
const personKeys = Object.keys(person)
const personvalues = Object.values(person)
const personEntries = Object.entries(person)
for(const key of personKeys) {
    console.log(key);
}