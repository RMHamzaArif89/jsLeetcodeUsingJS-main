checkCycle=(head)=>{
slow=head;
fast=head;
while(slow && fast){
    slow=slow.next;
    fast=fast.next.next;
    if(slow===fast){
    return true;
}
}

return fast;
}