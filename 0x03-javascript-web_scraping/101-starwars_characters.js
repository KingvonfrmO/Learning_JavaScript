const request = require('request');
const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(url, (error, response, body) => {
    if (error) {
        console.error(error);
        return;
    }

    const filmData = JSON.parse(body);
    const characters = filmData.characters;

    characters.forEach((charUrl) => {
        request.get(charUrl, (err, res, charBody) => {
            if (err) {
                console.error(err);
                return;
            }
            const character = JSON.parse(charBody);
            console.log(character.name);
        });
    });
});
