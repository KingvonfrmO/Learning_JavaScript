const request = require('request');
const url = process.argv[2];
let num = 0;

request.get(url, (error, response, body) => {
    if (error) {
        console.error(error);
    }
    else {
        const data = JSON.parse(body);
        for (const res of data.results){
            for (const char of res.characters){
                if (char.includes('/18/')){
                    num += 1;
                }
            }
        }
        console.log(num);
    }
});