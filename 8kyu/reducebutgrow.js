// will my array be sorted already?
// will i be dealing with integers only?
// will i be recieving an empty array at any point?

//x is an array
//loop through the array 
//multiply each element
//return the product  
function grow(x){
  console.log(x)
//  store the product in a variable  
  let product = 1//set to 1 becasue we are mutliplying
  //create a loop
 for(let i = 0; i < x.length; i++){
   //multipy each index and store in product
  product *= x[i]
 
 }
//   returning the product
  return product

}
// ex: [1,2,3,4] --> 1 * 2 * 3 * 4 = 24
// ex: [4, 1, 1, 1, 4] --> 4 * 1 * 1 * 1 * 4 --> 16