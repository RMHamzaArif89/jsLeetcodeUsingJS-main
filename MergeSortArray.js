
let mergeSort= function(arr1,m,arr2,n){
    for (let i = m, j = 0; j < n; i++, j++) {
        arr1[i] = arr2[j];
    }

    return arr1.sort((a,b)=>a-b)
}

let arr1=[1,2,3,0,0,0]
let m=3;

let arr2=[2,3,4]
let n=3
console.log( mergeSort(arr1,m,arr2,n))