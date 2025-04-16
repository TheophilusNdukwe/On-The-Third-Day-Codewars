//return the total number of smiling faces in the array
function countSmileys(arr) {
  console.log(arr)
  //loop to check each index and its value
  let sum = 0
  if (arr.length < 1){
      return 0
      }//:) :-) :~) // ;) ;-) ;~) // :D :-D :~D // ;D ;-D ;~D 
  for(let i = 0; i < arr.length; i++){
      //make a conditional to check if index is a valid smiley face
      if(arr[i] === ":)") {
        sum++
      }else if (arr[i] === ":D"){
        sum++
      }else if( arr[i] === ";-D"){
        sum++
      }else if (arr[i] === ":~)"){
        sum++
      }else if (arr[i] === ':-D'){
        sum++
      }else if (arr[i] === ':~D'){
        sum++
      }else if( arr[i] === ';~D'){
        sum++
      }else if (arr[i] === ':-)' ){
        sum++
      }else if (arr[i] === ';-)'){
        sum++
      }else if (arr[i] === ';)'){
        sum++
      }else if (arr[i] === ';~)'){
        sum++
      }else if(arr[i] === ';D'){
        sum++
      }
  //return 0 if empty array
  //return the number of smiley faces in the array
}
  return sum
}
//arr is an array
//find the number of smiles

// Eyes can be marked as : or ;
//Valid characters for a nose are - or ~
//a valid smile should be marked with either ) or D
// EXAMPLES
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;