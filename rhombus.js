var n=5;
var str="";
for(var i=0;i<n;i++){
    for(var j=n-i;j>=1;j--){
        str+=" ";
    }
    for(var k=0;k<2*i-1;k++){
       str+="*";
    }
    str+="\n";

}

console.log(str);