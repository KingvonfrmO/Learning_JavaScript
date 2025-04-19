$.get("https://swapi-api.alx-tools.com/api/films/?format=json", function(data){
    for (const movies of data.results){
        $("#list_movies").append(`<li>${movies.title}</li>`);
    }
});