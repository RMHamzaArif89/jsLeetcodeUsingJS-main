var timeNeededToBuyTickets=(k,arr)=>{
let val;
let index=0;
while(arr[k]>0){
val=arr.shift();
if(!val<=0){
    arr.push(val-1)

}
// console.log(val-1)
index++;

if(arr.length>1){
if(k==0){
    k=arr.length;
}
k--;
}
console.log(k)

}
return index
}
console.log(timeNeededToBuyTickets(0,[5,1,1,1]))