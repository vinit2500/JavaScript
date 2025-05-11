// setTimeout("hi") //treated as varibale to hi 
// setTimeout(console.log("Hello")); // javascript ka code manega 

// const hiii = 'hello'
// setTimeout('hiii') //setTimeout mai string pass krte ho to JS code ki tarah treat krte hai see on line no 2

// setTimeout("console.log('Inside setTimeout')", 4000) //returns timer id



// setTimeout("console.log('Inside setTimeout')", 5000) 

// clearTimeout(timerId => returned by setTimeout)

function a() {
  console.log("hello world");
}


// setTimeout(a,3000)

// syncronous line by line JS ka code syncronous hota hai 
// aur ye setTimout hai ye asyncronous code hota hai 




// const id = setInterval("console.log('Inside setInterval')", 1000)

// clearInterval(id)

setInterval(a, 1000)