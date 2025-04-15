//replace every letter with its position on alphabet
//if text is not a letter ignore it
function alphabetPosition(text) {
  //assign each alphabet to a number
  //example: a = 1
return text.split("")
//     .filter(letter => letter !== " " && letter !== "." && letter !== "'")
    .map(letters => letters.toLowerCase().charCodeAt(0))
    .filter(charCode => charCode >= 97 && charCode <= 122)
    .map(charCode => (charCode - 96).toString())
    .join(' ')
//loop through array; check each index
 
}