#!/usr/bin/env node

const program = require('commander');
const {prompt} = require('inquirer');
const {addBook, findBook, updateBook, removeBook, listAllBook} = require('./index');

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Book name '
    },
    {
        type: 'input',
        name: 'author',
        message: 'Author name '
    },
    {
        type: 'input',
        name: 'price',
        message: 'Book price '
    },
    {
        type: 'input',
        name: 'count',
        message: 'Number of Books '
    }
];

program
    .version('1.0.0')
    .description('Book management system')

program
    .command('add')
    .alias('a')
    .description('Add a book ')
    .action(() => {
        prompt(questions)
        .then(answer => {
            addBook(answer);
        })
    });

program
    .command('find <name>')
    .alias('f')
    .description('Find a book ')
    .action((name) => {
        findBook(name);
    });

program
    .command('update <_id>')
    .alias('u')
    .description('Update a book ')
    .action((_id) => {
        prompt(questions)
        .then(answer => {
            updateBook(_id, answer);
        })
    });

program 
    .command('remove <_id>')
    .alias('r')
    .description('Remove a book')
    .action((_id) => {
        removeBook(_id);
    });

program
    .command('list')
    .alias('l')
    .description('List all books ')
    .action(() => {
        listAllBook();
    });

program.parse(process.argv);


