//function returns an array 
//n is a number
//creating a countdown from n to 1
//where n > 0
function reverseSeq(n){
  // the function to output the number counting down to 1
  let arr = []
  //loop through the array
  for(let i = n; i > 0 ;i--){//Example: n=5 --> [5,4,3,2,1]
   arr.push(i)
  }
  
return arr
  
};

//Example: n=4 --> [4,3,2,1]
//Example: n=3 --> [3,2,1]