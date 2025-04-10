// busCap amount bus can hold; peopleOnBus -> number of people on bus; 
//waitDemand -> number of people waiting
  //if enough space return 0; else return wait
function enough(busCap, peopleOnBus, waitDemand) {//which will determine if there is space
   let remainingSeats = busCap - peopleOnBus
  if (waitDemand > remainingSeats) {//if there are seats left over 
    var overflow = waitDemand - remainingSeats//get the overflow amount
    return overflow//return overflow amount
}
  else {
    return 0//if there is enough space return 0
  }
  }