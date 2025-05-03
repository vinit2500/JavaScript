const user = {
    firstName: "Adarsh",
    lastName: "Singh",
    pata: {
        city:"Indore",
        pinCode:452009,
        state:"Madhya pradesh",
        moreDetails: {
            population:7487938,
            area: '234 sq km'
        }
    },
    age:34,
    isGraduate:false
}

//Error in case of const 
// user = {} 
// Not error because it does not change address of user instead it changes address of firstName
user.firstName = "Golu"

let user1 = {
  firstName: "Adarsh",
  lastName: "Singh",
  pata: {
    city: "Indore",
    pinCode: 452009,
    state: "Madhya pradesh",
    moreDetails: {
      population: 7487938,
      area: "234 sq km",
    },
  },
  age: 34,
  isGraduate: false,
};

//It will work in case of let and will change the address of user1 object
user1 = {}

/* 
let userName = 'Vinit'
//kisi variable ko change krte hai to address change  krte hai.
//  address value ka hota hai na ki variable ka 
// userName = 'Aditya'
*/


const user2 = {
  firstName: "Adarsh",
  lastName: "Singh",
  pata: {
    city: "Indore",
    pinCode: 452009,
    state: "Madhya pradesh",
    moreDetails: {
      population: 7487938,
      area: "234 sq km",
    },
  },
  age: 34,
  isGraduate: false,
};
delete user2.firstName  //returns true if delete
delete user2.pata


const user3 = {
  firstName: "Adarsh",
  lastName: "Singh",
  pata: {
    city: "Indore",
    pinCode: 452009,
    state: "Madhya pradesh",
    moreDetails: {
      population: 7487938,
      area: "234 sq km",
    },
  },
  age: 34,
  isGraduate: false,
};

// Object.seal(user3)
// delete user3.firstName //returns false now because we have sealed the object so no new 
// property will add or delete now but existing property can be changed.


Object.freeze(user3) //More strict than Object.seal nothing will change not even existing property
// Nothing can be change in user3 object now


//we ask does mobileNumber exists in user3 and it is case sensitive check only key exists in user3 or not irrespective of value
'mobileNumber' in user3 //false
'firstName' in user3 //true
