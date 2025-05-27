function lovefunc(flower1, flower2){
    
    
    if(flower1 % 2 === 0 && flower2 % 2 !== 0 || flower1 % 2 !== 0 && flower2 % 2 === 0){
      return true
    } 
    else{
      return false
    }
  }
  
  // both flower1 and flower2 are integers that will be either even or odd
  // if one is even and the other is odd then the function should return true
  // indicating that they are in love
  
  // return the true if the given numbers are odd and even.
  // return false if otherwise.
  
  // example
  // 2, 4 ==> false
  // 4, 9 ==> true
  // 1, 3 ==> true