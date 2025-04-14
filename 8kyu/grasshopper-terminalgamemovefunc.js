//hero moves from left to right
//player rolls dice and moves the number of spaces
//indicated by the dice two times

function move (position, roll) {
  //function that takes the current position of hero
  //and the roll (1-6)
  let newPost = position + (roll*2)
  
  
  // return the new position
  return newPost
}