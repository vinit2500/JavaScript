const myName = "Vinit";

const username1 = ''
const username2 = ''

// address of username1 and username2 will be same because it is primitive type @77 

const user1 = {
  firstName: "Akash",
  lastName: "Singh",
  age: 28,
  education: 12,
  city: "Indore",
};


const user2 = {
  firstName: "Akash",
  lastName: "Singh",
  age: 28,
  education: 12,
  city: "Indore",
};

// Address of user1 and user2 will be different if address of object equals means values
// of objects equal.
// means in javascript every object has different address 


const emptyObj1 = {};
const emptyObj2 = {};

// Even in case of empty object the address will be different. 
// access using dot notataion
console.log(user2.firstName)
console.log(user2.lastName)
//OR 
console.log(user2["lastName"]) //lastName is key here

/* 
  const user = {
     "last-Name" : "singh"
  }

  here we need bracket notation to access the value 
  user.["last-Name"]
  user.last-Name is wrong
*/

/*
  Power of barcket notation
*/

const name = "vinit"

const user3 = {
    fullName: "vinit solanki",
    vinit : "he is Good Boy"
}

console.log(user3[name])  // This is power of bracket annotation
console.log(user3["full"+"Name"])

const user4 = {
    firstName:"Vinit",
    lastName:"Solanki",
    pata : {
        city: "Indore",
        pinCode: "452009",
        state: "Madhya Pradesh",
        moreDetails : {
            population: 67637246747,
            area: 7367467
        }
    }
}

user4.age = 34
user4["is-Student"] = false 
