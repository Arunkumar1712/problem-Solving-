//right triangle
var n=5;
var st="";
for(var i=0;i<n;i++){
    for(j=n-1;j>i;j--){
        st+=" ";
     }
    for(k=0;k<=i;k++){
        st+="*"
    }
    st+="\n";
}
console.log(st);