const rps = (p1, p2) => {

    if ("scissors" === p1 && "paper" === p2 || "rock" === p1 && "scissors" === p2 || "paper" === p1 && "rock" === p2){
      return "Player 1 won!"
    }
    else if("scissors" === p1 && "rock" === p2 || "paper" === p1 && "scissors" === p2 || "rock" === p1 && "paper" === p2){
      return "Player 2 won!"
    }
    else {
      return "Draw!"
    }
    }
  