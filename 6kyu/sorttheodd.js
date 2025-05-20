// given an array of numbers
// will these numbers be positive?


// returning the array with the odd numbers sorted in ascending order
// leaving the even numbers at their original position

function sortArray(array) {
    // If array is empty return array
    if (array.length < 1) {
      return array;
    }
    
    // Extract odd numbers using filter method
    const oddNumbers = array.filter(num => num % 2 !== 0);
    
    // Sort the odd numbers in ascending order
    oddNumbers.sort((a, b) => a - b);
    
    // Create a new array with odd numbers in sorted order and even numbers in original positions
    const result = array.map(num => {
      if (num % 2 === 0) {
        // If number is even, keep it as is
        return num;
      } else {
        // If number is odd, take the next odd number from our sorted collection
        return oddNumbers.shift();
      }
    });
    
    return result;
  }
  // examples
  // [7, 1] --> [1, 7]
  // [5, 8, 6, 3, 4] --> [3, 8, 6, 5, 4]
  // [9, 8, 7, 6, 5, 4, 3, 2 , 1, 0] --> [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]