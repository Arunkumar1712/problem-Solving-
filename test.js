
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    let a=userInput[0].split("");
    let temp=0;
  for( var i=0;i<a.length;i++){
      if(i%2 === 0){
          if(i+1<a.length){
             temp=a[i];
            a[i]=a[i+1];
             a[i+1]=temp;} 
          }
      }
       
  a=a.join(" ")
  console.log(a);
});