// given a list of integers in an array
// determine if the sum of those integers is odd or even


function oddOrEven(array) {
    // use the reduce method to find the sum of the array 
    //   then if the result % 2 == 0 return even else false
    let sumArr = array.reduce((a, c) => {
      return a + c
    }, 0) 
    
    console.log(sumArr)
      if (sumArr % 2 === 0){
        return "even"
      }
      else{
        return "odd"
      }
    }
    
    // example
    // [0] --> even
    // [0,1,4] -- odd
    