//function that takes in an array of numbers; check to see if if each
// A (uppercase): 65
// E (uppercase): 69
// I (uppercase): 73
// O (uppercase): 79
// U (uppercase): 85
// a (lowercase): 97
// e (lowercase): 101
// i (lowercase): 105
// o (lowercase): 111
// u (lowercase): 117
function isVow(a){
  //create a new array

  //loop through to check value at each index
  for(let i = 0; i < a.length; i++){
    if(a[i] === 97){
      a[i] = 'a'
    }
    else if (a[i] === 101){
      a[i] = 'e'
    }
    else if (a[i] === 105){
      a[i] = 'i'
  }
  else if (a[i] === 111){
      a[i] = 'o'
}
    else if (a[i] === 117){
      a[i] = 'u'
      }
    }
    return a
    }