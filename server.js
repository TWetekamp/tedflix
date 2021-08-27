require('dotenv').config();
const express = require('express');
const path = require('path');
const { Film } = require('./models')

const server = express();

const { PORT } = process.env;

server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


server.use(express.static(path.resolve(__dirname + '/react-ui/build')));
server.use(express.json());

server.get('/heartbeat', ( req, res ) => {
    res.json({
        "is": "working"
    });
});

// Get films from films table
server.get('/server/films', async ( req, res ) => {
    const movies = await Film.findAll();
    res.json(movies);
});

// Get films by Title fragment from films table
server.get('/server/films/:title', async (req, res) => {
    const movieTitle = req.params.title;
    const moviesSearched = await Film.findAll({
        where: {
            title: movieTitle
        }
    });
    res.json(moviesSearched);
});


server.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}.`)
});