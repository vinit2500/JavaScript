// function a(b) {
//   console.log(typeof b)
//   console.log(b)
// }

// a("Hi") 
// a({username:'anurag', userage:50})
// a([1,2,3,4,5,6,7])

// console.log(typeof a)

// console.dir('Hiiiii');
// console.dir(a)

// a.age = 87 // function behaves like object 

// console.dir => normal value ko console log kr deta hai aur koi esa value hai jo behind the scene 
// object hai to usko us object ke form mai print krega 


// a is higher order function now  jb HOF bnate to hum expect krte hai usme function ke alawa kch aur na pass kiya jaye
function a(b) {
  console.dir(b);
  b()
}


// function sayhi() {
//   console.log("Hiiiiiiiiiiiiiiiiiiiiiiiiiii");
  
// }

// a(sayhi);

// alternative 
// callback function => kisi bhi function ko call krte time jo argument mai function dete hai 
// usko bolte hai callback function aur jis function ko pass kiya ja rha hai usko higher order 
// function bolte hai 
a(function(){
  console.log("Hiiiiiiiiiiiiiiiiiiiiiii");
})


/*
  function sayHi() {
      console.log("hiiiiiii")
  }

  const x = sayHi
  x.age = 7 => we can do x.age or sayHi.age 
  x()
*/
