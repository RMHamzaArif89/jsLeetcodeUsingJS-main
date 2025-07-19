
var checkAnagram=(str1,str2)=>{
    let arr1=str1.replace(/\s+/g, '').toUpperCase().split("").sort()
    let arr2=str2.replace(/\s+/g, '').toUpperCase().split("").sort()
 console.log(arr1,arr2)
    const isEqual = arr1.length === arr2.length &&
                    arr1.join('')==arr2.join('')
    
     if(isEqual){
        return "arrays are equal and anagram"
     }else{
        return "arrays are not equal not anagram"
     }
    }
    
    console.log(checkAnagram("raiLsafety","fairy taleS"))