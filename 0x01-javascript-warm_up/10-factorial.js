const arguments = process.argv.slice(2);
const a = Number(arguments[0]);

const recursion = (a) => {
    if (isNaN(a) || a < 0){
        return 1;
    }
    else if(a === 1){
        return 1;
    }
    else {
        return a * recursion(a - 1)
    }
}

console.log(recursion(a));