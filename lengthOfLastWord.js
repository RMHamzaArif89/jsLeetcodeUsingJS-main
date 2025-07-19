var lengthOfLastWord=function(s){
    let lengthOfWord=0;

//  console.log(s.slice(0,s.length))
for(let i=s.length-1;i>=0;i--){
    // console.log(i,s[i])
  if(s[s.length-1]===" "){
    s=s.slice(0,s.length-1);
    i=s.length;
  }
  else if(s[i]!==" "){
       lengthOfWord+=1;
    
    }else{
        return lengthOfWord;
    }
}

return lengthOfWord;
}
let s="i am the bo  y  "
console.log(lengthOfLastWord(s))