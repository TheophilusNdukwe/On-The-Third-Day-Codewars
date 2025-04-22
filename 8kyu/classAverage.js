 //  classPoints is an array of scores
//   Are my points an array?
//   will i be recieving only whole numbers?
//   returning true if youre score is better and false otherwise
//   get the average of the classpoints by adding all points and diving by length
//   comparing that to my points
//   if greater than my points than return false else return true
  

function betterThanAverage(cp, yp) {
  let sum = 0
//    take in the array add all points and divide by length
//    cp.push(yp)//add my points to class points  
  for(let i = 0; i < cp.length; i++){
  sum += cp[i]
 }
 
  if(yp > sum / cp.length){
   return true
 }
  else{
    return false
  }
  }



//   example: [100, 40, 34, 57, 29, 72, 57, 88], 75 ==> True
//   example: [12, 23, 34, 45, 56, 67, 78, 89, 90] , 9 ==> false