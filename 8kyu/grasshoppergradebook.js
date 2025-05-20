// there will be no negative values
// tested values are all between 0 and 100
// no values will be greater than 100

// find the average of the scores and return the letter grade associated with them


function getGrade (s1, s2, s3) {
    // add the scores together and divide them by 3 to get the average
    let sum = s1 + s2 + s3 
    let score = sum / 3
    //return the letter associated with the result
     if (score >= 90 && score <= 100) {
      return 'A'
    } 
    else if (score >= 80 && score < 90) {
      return 'B'
    }
    else if (score >= 70 && score < 80) {
      return 'C'
    }
    else if (score >= 60 && score < 70) {
      return 'D'
    }
    else {
      return 'F'
    }
  }
  
  // example
  // 90, 95, 93 --> A
  // 70, 70 ,100 --> 'B'
  // 60, 82, 76 --> 'C'