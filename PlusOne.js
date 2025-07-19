
var plusOne = function(Integers){
  
for (let i=Integers.length-1; i>=0; i--){
    if (Integers[i] < 9) {
        Integers[i] += 1;
        return Integers; 
        
    }
   Integers[i]=0;

}
Integers.unshift(1);
return Integers;
}

let Integers=[9,9,7,9]
console.log(plusOne(Integers))