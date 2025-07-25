
var getIntersectionNode=(headA,headB)=>{
    cur=headA;
    while(cur){
        temp=headB;
        while(temp){
            if(cur==temp){
                return cur
            }
            temp=temp.next;
        }
        cur=cur.next;
    }
return null
}

