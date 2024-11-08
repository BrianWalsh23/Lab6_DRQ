const express = require('express');
const app = express();
// You will get an error if both ports are the same
const port = 4000;




// Listening at localhost 4000
// Takes two arguments, req & res
// Get our JSON movies from @ /api/movies
app.get('/api/movies', (req, res) => {
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    // Instead of res.send we can use res.json to call the json
    res.json({ myMovies: movies });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});