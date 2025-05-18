function correct(string) {
    let str = string.split('');
    let cleanstr = "";
    
    for(let i = 0; i < str.length; i++) {
      if(str[i] === '0') {
        cleanstr += 'O';  // Add 'O' to the result
      } else if(str[i] === '5') {
        cleanstr += 'S';  // Add 'S' to the result
      } else if(str[i] === '1') {
        cleanstr += 'I';  // Add 'I' to the result (or 'L' if you prefer)
      } else {
        cleanstr += str[i];  // Keep other characters as-is
      }
    }
    console.log(cleanstr)
    return cleanstr;
  }