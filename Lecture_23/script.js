// const fruits = ['Mango', 'Apple', 'Orange']

// const myFruits = fruits

// //it will also add in fruits so both have same address 
// myFruits.push('Dates')
// myFruits.push('graphes')


const user1 = {
    firstName: "Vinit",
    lastName: "Solanki"
}

const user2 = user1

//also change user1.lastName
// user2.lastName = "Pandey"

user1.firstName = "Akash"

//The above is the problem with objects and arrays then how to duplicate 
//How to copy objects 
const user3 = {
  firstname:"Salman",
  lastname: "khan"
}

const user4 = {}

// Object.assign(user4, user3)  // now user3 and user4 will have different address

// latest method assign has become old 

const user5 = {...user3}  //spread operatior 


//How to copy array
const fruits = ['Mango', 'Apple', 'Orange']
// const myFruits = []

// first mehod
// // Object.assign(myFruits, fruits) //old method not used nowdays

// myFruits.push('Graphes')

//another way latest second method
// const fruits = ['Mango', 'Apple', 'Orange']
// // [] ye symbol se hi new array create hoga 
// const myFruits = [...fruits]

//third method
// const myFruits = [].concat(fruits)

//fourth method 
//const myFruits = fruits.slice() //slice will create new array



const user6 = {
    firstname:"tarun",
    lastname:"sharma",
    pta:{
      city:"indore",
      pinCode:452009
    },
    subject:['physics', 'maths','cs']
}
//pta wale ka address same hoga isme so user7 ke pta mai change krege to use6 ke pta mai bhi hoga
//same as in case of array
const user7 = {...user6}  //shallow copy ek level tk hi km krta hai 

//deep copy is not easy 
// json ka use hoga please explore 



















// in case of string address change beacuse we will have to assign new string
// const username1 = "Vinit"
// let username2 = username1 //same address of userName1 and userName2
// username2 = username2 + " Singh" //now address change of userName2
