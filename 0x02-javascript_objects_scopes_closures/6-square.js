const Square_1 = require('./5-square');

class Square extends  Square_1{
    charPrint(c){
        if (c === undefined){
            c = 'X';
        }
        for(let i = 0; i < this.height; i++){
            console.log(c.repeat(this.width));
        }
    }
}

module.exports = Square;