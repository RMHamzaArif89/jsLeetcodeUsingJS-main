
var validParenthesis= function(inp){
    var s=[];
    let paren={
        '(':')',
        '{':'}',
        '[':']',
    }
   for(val of inp){
    
    if(paren[val]){
        console.log("push",paren[val])
        s.push(paren[val])
    }else{
        if(s.pop()!==val){
            console.log(s.pop())
            return false;
        }
    }
   }
    console.log(s.length)
return s.length==0?true:false;

}

               let inp="[(())]"
console.log(validParenthesis(inp))