class ListNode{
  Constructor(next=null,data){
    this.next=next
    this.data=data
  }
}
 let deleteDuplicates=(head)=>{
current=head;
while(current && current.next){
    if(current.val===current.next.val){
        current.next=current.next.next
    }else{
        current=current.next;
    }
}
return head;
 }
 console.log(deleteDuplicates([1,1,2,3]))