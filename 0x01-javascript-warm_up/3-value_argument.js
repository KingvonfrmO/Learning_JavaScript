const arguments = process.argv.slice(2);

if (arguments[0] === undefined){
    console.log("No argument");
}
else {
    console.log(arguments[0]);
}