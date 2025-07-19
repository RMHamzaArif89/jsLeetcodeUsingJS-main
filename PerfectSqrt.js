let isPerfectSquare=(number)=>{
    let left=0;
    let right=number;
    let mid;
    while(left<=right){
        
        mid=Math.floor((left+right)/2);
        square=mid*mid
        if(square===number){
            return true;
    }else if(square<number){
        left=mid+1;
    }else{
        right=mid-1;
    }
}
    return false;
}

console.log(isPerfectSquare(16))