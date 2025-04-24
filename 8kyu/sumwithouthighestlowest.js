function sumArray(array) {
let sum = 0
  if(array === null || !array || array.length < 3){
    return 0
  }
    array.sort((a, b) => a-b)
    for(let i = 1; i < array.length - 1; i++){
      sum += array[i]
    }
  return sum
}