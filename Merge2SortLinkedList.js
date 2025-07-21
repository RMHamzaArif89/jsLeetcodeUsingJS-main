class ListNode{
  Constructor(next=null,data){
    this.next=next
    this.data=data
  }
}
 let mergeTwoLists2=(list1, list2)=>{
let List=new ListNode(-1)
current =List
while(list1!=null && list2!=null){
  if(list1.data<list2.data){
    current.next=list1;
    list1=list1.next;
  }else{
    current.next=list2;
    list2=list2.next;
  }
  current=current.next;
} 

    return List.next;

 }


console.log(mergeTwoLists2([1,2,3],[1,5,6]))