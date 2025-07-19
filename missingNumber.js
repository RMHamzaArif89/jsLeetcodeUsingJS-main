
var missingNumber = function(nums) {
   
    sortNums=nums.sort((a,b)=>a-b)
    // return sortNums
    len=nums.length;
    total=len*(len+1)/2;
    partial=0;
    for(n of nums){
        partial+=n;
    }
    return total-partial;
    if(sortNums[0]!==0){
        return 0
    }

    for(let i=0;i<sortNums.length;i++){
        if(sortNums[i]+1!==sortNums[i+1]){
            return sortNums[i]+1;
        }

    }
    return 0;
};
console.log(missingNumber([45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14]))