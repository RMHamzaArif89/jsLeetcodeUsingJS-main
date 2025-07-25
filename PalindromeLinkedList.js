class ListNode{
    constructor(val,next=null){
        this.val=val;
        this.next=next;
    }
}

var isPalindrome=(head)=>{
    let list=new ListNode(-1)
   let temp=list;
   let current=head;

   while(current!=null){
    let node=new NodeList(current.val)
    node.next=temp.next;
    temp.next=node;
    current=current.next;
   }

   p1=head;
   p2=list.next;
while(p1 && p2){
    if(p1!==p2){
        return false;
    }
}
   return true;
}