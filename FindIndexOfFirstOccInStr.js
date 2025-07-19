
var findIndex= function(str1,str2){
    let index=[];
//   console.log(index)
    for(let i=1;i<str1.length;i++){
     for(let j=0;j<str2.length;j++){
        if(str1[i]===str2[0] && str1.slice(i,i+str2.length)===str2){
            index.push(i);
            i+j;
          break;
        }
     }
        
    }
    return index;

}



let str1="hello world wor";
let str2="wor"
console.log(findIndex(str1, str2));