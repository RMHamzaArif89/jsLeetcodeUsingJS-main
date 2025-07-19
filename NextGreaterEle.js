
var nextGreaterElement = function(nums1, nums2) {

    let arr=[]
    let push=false;

    for(let i=0;i<nums1.length;i++){
        for(let j=0;j<nums2.length;j++){
            if(nums1[i]==nums2[j]){
              push=true;
                }
                if(push){
                    if(nums1[i]<nums2[j]){
                        arr.push(nums2[j])
                        push=false;
                    }

                }
           
            }
            if(push){
                arr.push(-1)
                push=false;
            }
        
    }
    return arr;
    
};
nums1 = [4,1,2], nums2 = [1,3,4,2]
 console.log(nextGreaterElement(nums1,nums2))