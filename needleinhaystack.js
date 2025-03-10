function findNeedle(haystack) {
    // your code here
  
    for (i = 0;i < haystack.length;i++){
      if ("needle" === haystack[i] ){
         return `found the needle at position ${i}`
      }
       
    }
    
  }