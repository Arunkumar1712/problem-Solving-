var n=5;
var str="";
for(var i=n;i>0;i--){
    for(var j=0;j<n-i;j++){
        str+=" ";
    }
    for(var k=2*i-1;k>0;k--){
        str+="*";
    }
    str+="\n";
}
console.log(str)