var arr=[143,153,345,1634]
for(var i=0;i<arr.length;i++){
    var n=arr[i];
var p=0;
var n1=n;
var ch=n;
while(n>0){
    n=parseInt(n/10);
    p++
}
var r;
var r1;
var ans=0;
while(n1>0){
    r1=n1%10;
    ans+=r1**p;
    n1=parseInt(n1/10);
}
if(ch===ans){
console.log(ans)}}