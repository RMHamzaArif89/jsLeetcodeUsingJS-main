const array=[1,2,3,4,5,6];
let target=11;

const array2=[];

for(let i=0; i<array.length; i++){

for(let j=i+1; j<array.length; j++){

let targetValue= array[i] + array[j];

if(targetValue==target){
    // console.log(i,j)
array2.push(i,j)
}

}
}

for(let a=0;  a<array2.length; a++){
    console.log(array2[a])
}

