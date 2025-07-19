var LgCommonPrefix= function(arr){
let arr2=[]
let strVal=""
for(let i=0; i<arr[0].length; i++){
let char=arr[0][i];

for(let j=1; j<arr.length; j++){
if(arr[j][i]!==char){
    return strVal;
}


}
strVal+=char;


    }
    return strVal;
}

let arr=["flower","flow","flight"];
console.log(LgCommonPrefix(arr))