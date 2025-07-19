var findTheDifference=(s,t)=>{
    s1=s.split("")
    t1=t.split("")
    let index;
for(e of t1){
    if(!s1.includes(e)){
       return e
    }else{
         index=s1.indexOf(e)
        s1.splice(index,1)
    }
}
return s1;
}
console.log(findTheDifference("a","aa"))