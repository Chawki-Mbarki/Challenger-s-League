const mongoose = require('mongoose');

const port = process.env.PORT;

mongoose.connect(process.env.URI)
  .then( () => console.log('connection established on port ', port))
  .catch(err => console.log("Something went wrong when connecting to the database", err))