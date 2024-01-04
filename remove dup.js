// removing duplicates from arrray
var a =[1,3,5,3,2,7];
var arr=[]
for(var i=0;i<a.length;i++){
      var count =0;
      for(var j=i+1;j<a.length;j++){
        if(a[i] === a[j]){
            count ++;
        }

      }
      if(count<=0){
        arr.push(a[i]);
      }
}
console.log(arr);