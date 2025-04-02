function strCount(str, letter){  
  //use split() to separate string into an array of letters
  //use a for loop to loop through the index of array and compare the index to the variable letter
  let strArr = str.split('')//turns string into array of string letters 
  let count = 0 //track letter count
  //checking each index and comparing it to letter and tracking occurences in count 
  for(let i=0;i<=strArr.length-1;i++){
    if(strArr[i] === letter){
      count++
    }

   
  }
  return count
}