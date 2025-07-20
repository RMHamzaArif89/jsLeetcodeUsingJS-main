class RecentCounter{
    constructor(){
        this.calls=[]
    }
    ping(t){
        this.calls.push(t);
        while(this.calls[0] < t - 3000){
            this.calls.shift();
        }
        return this.calls.length;
    }

}
 let recentCounter = new RecentCounter();
recentCounter.ping(1);     // requests = [1], range is [-2999,1], return 1
recentCounter.ping(100);   // requests = [1, 100], range is [-2900,100], return 2
recentCounter.ping(3001);  // requests = [1, 100, 3001], range is [1,3001], return 3
console.log(recentCounter.ping(3002)) // requests = [1, 100, 3001, 3002], range is [2,3002], return 3