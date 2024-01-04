var a=[1,3,2,7,4,10,9];
for(var i=0;i<a.length;i++){
   var a1=a[i];
   var a2=a[i+1];
   var dif = a1-a2;
   if(dif>0){
    a[i]=a[i+1];
    a[i+1]=a1;
   }
}
console.log(a);