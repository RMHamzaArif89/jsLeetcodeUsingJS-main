
SearchInsertPos= function(arr,val){
    for(let i=0; i<arr.length;i++){
        if(arr[i]>=val){
            console.log(i)
            break;
        }
      
    }
    console.log(arr.length)
}
let arr=[1,2,4,5,5]
let val=3
SearchInsertPos(arr,val);