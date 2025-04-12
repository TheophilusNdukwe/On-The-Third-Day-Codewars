// Return a new array with the strings filtered out
//function takes removes strings from list

function filter_list(l) {
  //loop to run through array
  //conditional to check if index is integer or string
  const arr = []//new array to contain integers only
  for(let i = 0; i < l.length; i++){
    if(typeof l[i] !== 'string'){//check data type using typeof 
      arr.push(l[i])//push integers to new array
    }
   
  }
   return arr
  
  
  }