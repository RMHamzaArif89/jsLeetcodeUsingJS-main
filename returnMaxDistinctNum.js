var ThirdMax=(arr)=>{
    arr.sort((a, b) => a - b)
    let Thirdmax=arr[arr.length-1]
    index=0;

for(let i=arr.length;i>=0;i--){
    if(arr[i]<Thirdmax){
Thirdmax=arr[i]
index+=1;}
if(index==2){
    return Thirdmax
    }
}

return Math.max(...arr)

}

console.log(ThirdMax([1,2,2,3,2]))