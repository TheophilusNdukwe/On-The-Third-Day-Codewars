function calculateYears(principal, interest, tax, desired) {
  let years = 0
    if (principal == desired){
      return 0
    }
  while (principal < desired){
    let interestEarned = principal * interest //50
    let taxAmount = interestEarned * tax
    principal = principal + interestEarned - taxAmount
    years += 1
  }
  return years
}