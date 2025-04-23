// 1. FizzBuzz
// Problem: Write a program that prints numbers from 1 to n. For multiples of 3, print "Fizz" instead of the number. For multiples of 5, print "Buzz". For numbers that are multiples of both 3 and 5, print "FizzBuzz".
// Strategy:

// Loop through numbers 1 to n
// Check divisibility conditions using modulo (%) operator
// Order your conditionals carefully (check for divisible by both 3 and 5 first)

// Starter Code:
//javascript
function fizzBuzz(n) {
    let fizz = "Fizz"
    let buzz = "Buzz"
  // Loop through numbers 1 to n
  for (let i = 1; i <= n; i++) {
    // Check if divisible by both 3 and 5
    if(i % 3 === 0 && i % 5 === 0){
        console.log(`${fizz} + ${buzz}`)
    }
    // Check if divisible by 3 only
    else if(i % 3 === 0){
        console.log(fizz)
    }
    // Check if divisible by 5 only
    else if(i % 5 === 0){
        console.log(buzz)
    }
    // If none of the above, print the number
    else {
        console.log(i)
    }
        
    }
  
}

fizzBuzz(10)
// fizzBuzz(20)
// fizzBuzz(5)