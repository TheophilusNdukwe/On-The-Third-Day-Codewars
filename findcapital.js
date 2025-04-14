//function takes in a single non empty string
//string has lowercase and uppercase ascii letters
//returns ordered list of indices of only capital letters in string

function capitals(word) {
    //take in a string of characters and separate each letter
 
    let letters = word.split('')
    //start with empty array
    let arr = []
    //create a array out of word given
    //for loop to iterate over each letter
  
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] === letters[i].toUpperCase()) {
            arr.push(i)
        }
    
    }
    return arr
    //check if letters[i] === letters[i].toUppercase()
    //if capitalized then push to new array
 
  
    //track indices of capital letters
}  //return array of index values in word that are capital