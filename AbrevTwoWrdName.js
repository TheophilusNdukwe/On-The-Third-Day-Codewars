function abbrevName(name){
    //convert name into intials.
    //first convert (name) into an array and store the value into an variable.
  let arr = name.split(" ")//be sure to put separate the quotes with a space
    // makes the items in array uppercase
    // then takes the first letter of each index 
  return `${arr[0].charAt(0).toUppercase()}.${arr[1].charAt(0).toUppercase()}`


}