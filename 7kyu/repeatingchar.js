// will I only be recieving a string containing letters?
// so the string will contain numbers?
// ignore lettercasing
// assume empty string is an isogram
//  returning true for letters that do not have repeating letters in them
//  false for letters that do.
function isIsogram(str){
  let arr = []//create an empty array to store seen characters
//   loop through each chracter in the string
  for(let i = 0; i < str.length; i++){
    let currentChar = str[i].toLowerCase() //convert to lowercase for case insensitivity
//     Check if this character is already in our array
    if(arr.includes(currentChar)){
//       we found a repeat !
      return false
    }else{
//       add this character to our arr
      arr.push(currentChar)
    }
//     return true outside of the loop
  }return true
  
}

//Ex: "dermatoglyphics" --> true "no letters repeating"
//Ex: "ada" --> false  "repeating"
//Ex: "moOse" --> false  "o" repeating

function isIsogram(str){
 // Handle empty string case
  if (!str) return true;
  
  // Convert to lowercase and potentially filter for just letters
  const processedStr = str.toLowerCase();
  
  // Create a Set from the string - Sets only store unique values
  let set = new Set(processedStr)
  // If the Set's size equals the string length, no repeats exist
  return true ? set.size === processedStr.length : false
}

