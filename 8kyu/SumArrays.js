function sum (numbers) {
 let sumArr
  if(numbers.length === 0){
    return 0
  }
  else if(numbers.length < 2){
    return parseInt(numbers)
  }
  else if(numbers.length > 1){
    sumArr = numbers.reduce((a,b)=> a + b)
  }
  return sumArr
  
}

//numbers can be negative and non-integer
// if the array doesnt contain any numbers you should return 0

// takes an array of numbers and return the sum of the numbers

// examples:
// 1, 5.2, 4, 0, -1 => 9.2

// takes the sum of these numbers and returns 