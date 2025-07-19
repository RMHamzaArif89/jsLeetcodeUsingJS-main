
var isPalindrome=(str)=>{
 
    let vStr=str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  let str2=vStr.split('').reverse().join('').toLowerCase()
  

  
      if(vStr===str2){
          return true
      }
  
  return false
}
console.log(isPalindrome("madam."))