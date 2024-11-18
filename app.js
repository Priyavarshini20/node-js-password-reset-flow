// import express
const express = require('express');
const Reciperoutes = require('./routes/Reciperoutes');
const Recipe = require('./models/Recipe');

// create an express app
const app = express();

// add middleware to parse JSON
app.use(express.json());
app.use('/', express.static('dist'))

// define the root route
app.use('/api/v1/routes',Reciperoutes);

// export the app
module.exports = app;