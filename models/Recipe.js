// import mongoose
const mongoose = require('mongoose');

// create a schema
const recipeSchema = new mongoose.Schema({
    title: String,
    description: String,
    
    
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Recipe', recipeSchema, 'recipes');