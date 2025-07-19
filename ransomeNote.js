ransomNote=(s1,s2)=>{
a2=s2.split("")

for(e of s2){
index=a2.indexOf(e)
if(index===-1){
    return false
}
a2.splice(index,1)
  
}
return true;
}

console.log(ransomNote("aab","baa"))