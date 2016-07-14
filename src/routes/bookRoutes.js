var express = require('express');

var bookRouter = express.Router();

var books = [
    {
        title: 'You are beautiful',
        genre: 'beautiful nonfiction',
        author: 'Ryan Magoon',
        read: false
    },
    {
        title: 'Miracle on 34th street',
        genre: 'nonfiction',
        author: 'Ryan Magoon',
        read: true
    }
];

bookRouter.route('/')
    .get(function(req, res) {
    res.render('books', {
        title: 'Hello from render',
        nav: [{
            Link: '/Books',
            Text: 'Books'},
              {
                  Link: '/Authors',
                  Text: 'Authors'
              }],
        books: books
    });
});

bookRouter.route('/:id')
    .get(function(req, res) {
    var id = req.params.id;
    res.render('book', {
        title: 'Hello from render',
        nav: [{
            Link: '/Books',
            Text: 'Books'},
              {
                  Link: '/Authors',
                  Text: 'Authors'
              }],
        books: books[id]
    });
});

module.exports = bookRouter;