function updateLight(current) {
  //Conditionals
    if (current === 'green'){
      return 'yellow'
    }
    if (current === 'yellow'){
      return 'red'
    }
    if (current === 'red'){
      return 'green'
    }
  }