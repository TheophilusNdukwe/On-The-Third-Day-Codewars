function pipeFix(numbers){
let newArr = []// new array to hold changes we make
let minVal = Math.min(...numbers)// gets the lowest number
let maxVal = Math.max(...numbers)//gets the highest number

// for loop to compare the min to max
// for everytime that min in less than or equal to max then increment i by 1 and push that to newArr
for(let i = minVal; i <= maxVal; i++){ 
  newArr.push(i)
}
  return newArr
}