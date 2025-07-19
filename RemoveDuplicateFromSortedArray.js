
var removeDuplicates = function(nums) {
    let k = 1;
    for(let i=1; i<nums.length;i++){
    
if(nums[i]!==nums[k-1]){
    nums[k] = nums[i]
    k++;
} 
    }
    return nums[k];
    console.log(k)
}
let array=[1,1,2,3,4,4,5,6,6,7,8]

console.log(removeDuplicates(array))