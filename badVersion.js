var isBadVersion=(n,b)=>{
    let val=false;
for(let i=0;i<=n;i++){
    if(i>=b){
        val=true;
        return i;
        
    }

}
}
console.log(isBadVersion(5,4))