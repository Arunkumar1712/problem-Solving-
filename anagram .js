let a ="triangle";
let b="integral";
var check=0;
for(var i=0;i<a.length;i++){
    for(var j=0;j<b.length;j++){
        if(a[i]===b[j]){
            check++
        }
    }
    
}
//console.log(check)
if(check === b.length){
    console.log("yes")
}else{
    console.log("no")
}