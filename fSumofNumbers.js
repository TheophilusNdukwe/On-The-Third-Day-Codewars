//entering 2 different numbers, either positive or negative
//find sum of all numbers in between 
//if 2 numbers are equal return a or b
function getSum(a, b){
  //create a variable to hold the sum of numbers a , b
  let sum = 0
 //find the largest number and the smallest
  let max = Math.max(a,b)
  let min = Math.min(a,b)
  //loop through to the max starting at the min value 
  for (let i = min; i <= max; i++){
    //add i to the sum and store sum in sum
    sum = sum + i
    console.log(sum)
  }//return goes outside the loop
  return sum
}