//kind of replacement of argument keyword

const nums1 = [1,2,3,4,5]
           
              //rest parameter 
function add(a,b,...nums) {
   console.log(nums)
   let sum = 0
   for(let i=0;i<nums.length;i++) {
      sum+=nums[i]
   }
   return sum
}
  //spread operator 
add(...nums1)