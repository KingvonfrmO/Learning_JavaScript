const request = require('request');

const id = process.argv[2];
const url = "https://swapi-api.alx-tools.com/api/films/" + id;
request.get(url, (error, response, body) => {
    const data = JSON.parse(body);

    for (const char of data.characters){
        request.get(char, (error, response, body) => {
            if (error) {
                console.log(error);
            } else {
                const names = JSON.parse(body);
                console.log(names.name);
            }
        });
    }
});