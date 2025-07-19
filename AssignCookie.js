var findContentChildren =(s,g)=>{
    s.sort((a,b)=>a-b)
    g.sort((a,b)=>a-b)

    let chindInd=0;
    for(let i=0; i<g.length-1;i++){
    for(let j=0;j<s.length;j++){
            if(s[j]==g[i]){
            s[j]=""
            chindInd++;
        }else if(s[i]>g[i]){
             s[j]=""
            chindInd++;
        }
    }
}
return chindInd
}

console.log(findContentChildren([1,2,3],[1,2]))