//given non-empty string
//return middle character of the string
//we will only be given string no integers no non-negative numbers
function getMiddle(s) {
    //take in a string
    //turn string into an array
    let str = s.split('')
    console.log(str)
    //then find the middle of the array using a for loop
    for(let i = 0; i < str.length; i++){
    //then we will determine if the length is odd or even
    //if it is odd then we will return the single middle character
  //     we need to use math.floor to round the length of the array down
      let middleIndex = Math.floor(str.length / 2)
  //       console.log ([str[middleIndex - 1]])
      if(str.length % 2 === 0 ){
        let result = str[middleIndex] + str[middleIndex -1]
            return result.split('').reverse().join('') 
        }
      else {
        //if it is even then we will return the 2 middle characters
        return str[middleIndex]
        console.log(str[middleIndex])
      }
    
    
      
      }
  }