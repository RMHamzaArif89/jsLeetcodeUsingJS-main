class LinkList{
    constructor(val,next=null){
        this.val=val;
        this.next=next;
    }
}

    var removeLinkListElement=(head,ele)=>{
        let List=new LinkList(-1)
        let temp=List
        let current=head;
        while(current && current.next){
            if(current.val!==ele){
            temp.next=current;
            temp=temp.next;
            current=current.next;
            }else{
                current=current.next;
            }
        }
        temp.next=null;
        return List.next;
    }