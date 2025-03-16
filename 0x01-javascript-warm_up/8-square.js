const argument = process.argv.slice(2);

const x = Number(argument[0]);

if (isNaN(x)){
    console.log("Missing size");
}
else {
    for (let i = 0; i < x; i++){
        console.log('X'.repeat(x));
    }
}