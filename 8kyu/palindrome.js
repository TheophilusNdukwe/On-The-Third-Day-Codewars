//given a string return true if the string is a palindrome then return false if it isnt.
//example: racecar ==> true
//example: laptop ==> false


//compare the orginal string 
//if it is equal then it is a palindrome 
function palindromeCheck(string){
// split the string into separate characters in an array
//reverse the string then join it together
    let word = string.split('').reverse().join('')
    if(word === string){
        return true
    }
    else{
        return false
    }
}
