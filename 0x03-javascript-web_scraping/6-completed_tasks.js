const request = require('request');
const url = process.argv[2];

request.get(url, (error, response, body) => {
    if (error){
        console.error(error);
    }
    else{
        const data = JSON.parse(body);
        const dict = {};
        for (const x of data){
            if (x.completed){
                if (!dict[x.userId]) {
                    dict[x.userId] = 0;
                }
                dict[x.userId] += 1;
            }
        }
        console.log(dict);
    }
});