// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000


var romanToIng=function(s){
    let romanValues={
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
// 1000-50+1000-10+50-1+4= 1994
let ingVal=0;
let arrVal=s.split("");

 for(let i=0; i<arrVal.length; i++){
    for(val in romanValues){
     
        if(arrVal[i]==val){
       
            if(i<arrVal.length-1 && romanValues[arrVal[i]]<romanValues[arrVal[i+1]]){
                console.log(val)
                ingVal-=romanValues[val];
                console.log(romanValues[val])
            }else{
                ingVal+=romanValues[val];
            }
           
        }
    }
  }
  return ingVal;
 
}

let s="MCMXCIV"

console.log(romanToIng(s))