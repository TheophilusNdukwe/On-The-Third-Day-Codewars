function positiveSum(arr) {
console.log(arr)
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
    sum = sum + arr[i]
    
    }
    
  }
  return sum
}
//create an array 
//create a way to keep track of array length &
//store that value in i 
//if i which represents the 