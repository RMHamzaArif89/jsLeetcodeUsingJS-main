const intersect=(arr1,arr2)=>{
    uniqueArr=[]
   for(val of arr1){
    let index = arr2.indexOf(val);
    if(index!=-1){
        uniqueArr.push(val)
        arr2.splice(index,1)
    }
   }
    //   u2=new Set(uniqueArr)
    return uniqueArr
}

    arr1=[1,2,3,4,3,0,3]
    arr2=[2,3,4,5,6,3]
console.log(intersect(arr1,arr2))