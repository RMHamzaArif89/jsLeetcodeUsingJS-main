var reverseList=(head)=>{
    current=head;
    pre=null;
    while(current!=null){
        let v=current.next;
        current.next=pre;
        pre=current;
        current=v;

    }
    return pre;
}