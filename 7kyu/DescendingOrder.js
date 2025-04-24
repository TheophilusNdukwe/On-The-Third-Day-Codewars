// will there be any negative integers?
// will n ever be null?

// return the integer in highest to lwest
//rearranging the original integer

function descendingOrder(n){
  //convert to string -> split string -> reverse it -> join it together
 
if(n < 10){
  return n
}
  
  let num = n.toString().split('')
  let result = num.sort((a,b) => b-a)
  
  console.log(result.join(''))
  return parseInt(result.join(''))
// ex: 293949 --> 999432
// ex: 145263 --> 654321
// ex: 123456789 --> 987654321
  
  }