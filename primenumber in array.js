//prime number in array
var arr = [1,2,3,4,5,6,7,8,9,10,11];
for(var i=0;i<arr.length;i++){
    var count=0;
    for(var j=1;j<i;j++){
        if(arr[i]%j===0){
        count++;
        }
    }
    if(count===1){
        console.log(arr[i]);
    }
}