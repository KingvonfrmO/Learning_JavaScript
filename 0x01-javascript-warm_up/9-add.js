const arguments = process.argv.slice(2);
const a = Number(arguments[0]);
const b = Number(arguments[1]);

function add(a, b) {
    return a + b
}

console.log(add(a, b));
