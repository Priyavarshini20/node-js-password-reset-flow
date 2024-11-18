// import express
const express = require('express');
const RecipeControllers = require('../controllers/RecipeControllers');

// create an express router
const Reciperoutes = express.Router();

Reciperoutes.get('/', RecipeControllers.getAllRecipe);
Reciperoutes.post('/', RecipeControllers.createRecipe);
Reciperoutes.put('/:id', RecipeControllers.updateRecipe);
Reciperoutes.delete('/:id', RecipeControllers.deleterecipe);

// export the router
module.exports = Reciperoutes;