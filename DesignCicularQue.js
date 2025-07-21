class CicularQueue{
constructor(len){
this.q=new Array(len)
this.len=len;
this.front=0;
this.rear=len-1;
}

enque(e){
if(this.isFull()){
  return -1
}
  this.rear=(this.rear+1)%this.len;
    this.q[this.rear]=e;
  return true
}

deque(){
    if(this.isEmpty()){
        return -1
    }
 this.front=(this.front+1)%this.len;
 this.q[this.front]=undefined;
 return true
}

isFull(){
    return this.q.length===this.len
}

isEmpty(){
    return this.q.length===0;
}

rare(){
    if(this.isEmpty()){
        return -1
    }
    return this.rare
}
front(){
    if(this.isEmpty()){
        return -1;
    }
    return this.front
}
}


ciculrQ=new cicularQue(3)
console.log(ciculrQ.enque(1))
console.log(ciculrQ.enque(2))
console.log(ciculrQ.enque(3))
console.log(ciculrQ.enque(4))
console.log(ciculrQ.isEmpty())
console.log(ciculrQ.deque(3))
