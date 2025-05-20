// will all the integers given be greater than 0?
// given 3 integer a, b, c

// we will be returning true if a triangle can be formed?
// false otherwise

function isTriangle(a,b,c){
    //  use the pythagorean theorem to determine if the 3 ints will form a triangle
      if (a + b > c && b + c > a && a + c > b)
      return true;
      else{
        return false
      }
    }
    
    // examples
    
    // 1,2,2 --> true
    // 4,2,3 --> true
    // 2,2,2 --> true
    // 1,2,3 --> false
    // -5,1,3 --> false