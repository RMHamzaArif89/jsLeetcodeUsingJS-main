
const intersect=(arr1,arr2)=>{
    k=1;
    uniqueArr=[]
    let p;

    // arr1=[...arr1,...arr2];

    for(let i=0;i<arr2.length;i++){
        if(arr1.includes(arr2[i])){
            uniqueArr.push(arr2[i])
            console.log("ok")
        }
        }
      
    
    mySet=new Set(uniqueArr)
    uniqueArr2=[...mySet]
    return uniqueArr2
}

arr1=[1,2,3,4,8]
arr2=[2,3,4,5,4,1,7,0,8]
console.log(intersect(arr1,arr2))