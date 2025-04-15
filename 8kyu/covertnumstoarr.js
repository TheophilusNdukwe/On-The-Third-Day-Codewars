function digitize(n) {
  //code here
  let rev = n.toString().split('').reverse()
  //loop through array 
   let arr = []
  for(let i = 0; i < rev.length; i++){//to loop throguh index
  console.log(Number(rev[i]))
    arr.push(Number(rev[i]))//using number constructor change into int
}//pushing new values into arr
  return arr
}
