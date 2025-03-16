const arguments = process.argv.slice(2).map(Number);

if (arguments.length < 2) {
    console.log("0");
}
else {
    let first = -Infinity;
    let second = -Infinity;

   for(const num in arguments) {
       if (num > first){
           second = first;
           first = num;
       }
       else if (num > second && num !== first){
           second = num;
       }
   }

   console.log(second);
}