// list of integer pairs
// first index = people getting on the bus 
// second index = people that get off the bus

// return the number of people who are still on the bus after the last stop(last array)

var number = function(busStops){
// create a variable to store result of index0 - index1 then being added into the result 
  let result = 0
  for (let i = 0; i < busStops.length; i++){
    result += busStops[i][0] - busStops[i][1] //substract the index and store in result
//     the loop add the results together
  }
  return result
  
  
}
// [[10, 0], [3,5], [5,8]] ===> 5
//[[3,0], [9,1], [4,10], [12,2], [6,1], [7,10]] ==> 17