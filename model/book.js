const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
    name:{ type: String},
    author: {type: String},
    price: {type: Number},
    count: {type: Number}
});

module.exports = mongoose.model('Book', bookSchema);