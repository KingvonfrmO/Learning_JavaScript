const argument = process.argv.slice(2);

let x = Number(argument[0]);

if (isNaN(x)){
    console.log("Missing number of occurrences");
}

for (let i = 0; i < x; i++){
    console.log("C is fun");
}