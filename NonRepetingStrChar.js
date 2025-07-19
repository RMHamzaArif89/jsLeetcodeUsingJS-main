var firstUniqChar=(str)=>{
    arr=str.split("")
    let val;
    for(let i=0;i<arr.length;i++){
        arr[i-1]=val
        val=arr[i];
        arr[i]=" "
if(!arr.includes(val)){
    return i
}

        }
    
    return -1;
}
console.log(firstUniqChar("loveleetcode"))