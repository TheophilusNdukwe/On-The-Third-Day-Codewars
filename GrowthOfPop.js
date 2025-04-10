//p0 is town pop; percent is increase of town pop; 50 is the aditional increase in pop 
//aug is inhabitants coming or leaving; 

function nbYear(totalPop, percent, aug, p) {
    // your code
  //equation that tells us the growth of pop after 1 year
 
let percentage = percent / 100 
let years = 0
while(totalPop < p){     
  totalPop = Math.floor(totalPop + totalPop * percentage + aug)
  years++
  }
  return years 
  
}