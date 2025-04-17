function countSheeps(sheep) {
  //for loop to get the length of array
  let sum = 0
  console.log(sheep)
  for(let i = 0; i < sheep.length; i++){
     //create a conditional that checks if index contains true of false 
    if(sheep[i] === true){
      sum++
    }
  }
 
  //return number of sheep
  
  return sum
}
// TODO
  //sheep an array
  //true means present
  //false means not present
  //if null or undefined false
  