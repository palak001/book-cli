const mongoose = require('mongoose');

//to use mongoose promises
mongoose.Promise = global.Promise;

//connected to db
const db = mongoose.connect(require('./config/keys').mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Book = require('./model/book');

const addBook = (book) => {
    Book.create(book)
    .then(book => {
        console.info('New book added');
    })
}

const findBook = (name) => {
    //make case insensitive
    const search = new RegExp(name, 'i');
    Book.find({$or: [{name: search}, {author: search}]})
    .then(books => {
        console.info(books);
        console.info(`${books.length} matches`);
    })
}

const updateBook = (_id, book) => {
    Book.updateOne({_id}, book)
    .then(book => {console.info('Book updated')})
}

const removeBook = (_id) => {
    Book.deleteOne({_id})
    .then(book => {console.info('Book removed')})
}

const listAllBook = () => {
    Book.find({})
    .then(books => {
        console.info(books);
        console.info(`${books.length} mathches`);
    })
}

module.exports = {
    addBook,
    findBook,
    updateBook,
    removeBook,
    listAllBook
}