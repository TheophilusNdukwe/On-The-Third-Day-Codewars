//name is a string; function needs to return the answer
  //if name begins with R or r then return name + you are playing banjo
//else return name + you are not playing the banjo

function areYouPlayingBanjo(name) {
 //function will check the string in variable name
  //start by converting the string into a array of letters
  let nameArr = name.split('')//a method that turns a string into a array of characters that make up the string Ex: name = "adam"; name.split('') = ['a', 'd'.....]
      //check if the first index of the array is equal to r or R
  if(nameArr[0] === 'r' ||nameArr[0] === 'R'){ 
    return `${name} plays banjo`
  }else{
    return `${name} does not play banjo`
  }
}

