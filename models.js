const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
    title: String,
    author: String,
    year: Number
});

const Book = mongoose.model('book', bookSchema); 

module.exports = {
    Book
};