// given one parameter, the original string
// no strings less than two characters

// removes the first and last characters of a string 

let arr = []

function removeChar(str){
// i want to turn the string into an array and separate the characters
  let string = str.split('')
//   then i want to remove the letter at the first index
  let firstL = string.shift()
  let lastL = string.pop()
  
   return string.join('')
//   then i want to remove the letter at the last index
//   and then return the str
};

// removeChar("eloquent") ==> loquen
// removeChar('country') ==> ountr
// removeChar('batter') ==> atter


