const { Schema, model } = require('mongoose');

const categorySchema = Schema({
    name: String,
    description: String,
    image: String,
});

module.exports = model('Category', categorySchema);