const { Schema, model, Types } = require('mongoose');

const bookSchema = Schema({
    title: String,
    score: Number,
    image: String,
    autor: String,
    description: String,
    categoryId: Types.ObjectId,
});

module.exports = model('Book', bookSchema);