var removeElement = function(nums, val) {
    let k=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==val){
        nums[k]=nums[i]
        k++;
        }
    }
    return k;
};

let arr=[1,2,3,3,4,5,5,6];
let val=3;
removeElement(arr,val)
// console.log(removeElement(arr,val))