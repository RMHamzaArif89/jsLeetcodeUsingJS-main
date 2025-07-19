class myStack{
  constructor(){
      this.q1=[];
      this.q2=[];

  }

    push(x){
         this.q2.push(x)
        while(this.q1.length > 0){
           this.q2.push(this.q1.shift())
        }

        [this.q1, this.q2] = [this.q2, this.q1];
    }

    top(){
        if(this.q1.length === 0) {
            return null; 
    }
        return this.q1[0]
}
    empty(){
      return this.legnth===0;
    }

    pop(){
        return this.q1.shift()
    }
     

}

let mystack= new myStack();
mystack.push(1);           
mystack.push(2);              

console.log(mystack.pop());   
console.log(mystack.empty())
console.log(mystack.top());