const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

const celebs = [
  {
    name: 'Tom Cruise',
    occupation: 'Artist',
    catchPhrase: 'I\'m the best',
  },
  {
    name: 'Arnold Schwarzenegger',
    occupation: 'Terminator',
    catchPhrase: 'Hasta la vista, baby',
  },
  {
    name: 'Jim Carrey',
    occupation: 'Comedian',
    catchPhrase: 'Lalalalalala!!',
  },
];

const movies = [
  {
    title: 'The matrix',
    genre: 'Fiction',
    plot: 'Neo discovers that his reallity is not but a dream...',
  },
  {
    title: 'The Terminator 2',
    genre: 'Fiction',
    plot: 'The T800 returns, this time to protect John Connor from a evem more dangerous threat...',
  },
  {
    title: 'The mask',
    genre: 'Comedy',
    plot: 'Stanley Ipkis finds a mask in the river, and this mask will change this destiny forever...',
  },
];

mongoose
  .connect('mongodb://localhost/lab-movies', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);

    Movie.insertMany(movies)
      .then(insertedMovies => {
        console.log(`Inserted ${insertedMovies.length} movies!!!`);

        mongoose.connection.close();
      })
      .catch(error => console.log(error));
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });
