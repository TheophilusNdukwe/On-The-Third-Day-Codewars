const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // nearest pump 50 miles away
    //25 miles per gallon
    //2 gallons left
   let possibility = distanceToPump / mpg 
   if (fuelLeft >= possibility ){
     return true
   }
    else{
      return false
    }
    
  };
  zeroFuel(50,25,2)