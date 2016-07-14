var express = require('express');
var bookRouter = express.Router();
var router = function (nav) {
    var books = [
        {
            title: 'You are beautiful'
            , genre: 'beautiful nonfiction'
            , author: 'Ryan Magoon'
            , read: false
        }
        , {
            title: 'Miracle on 34th street'
            , genre: 'nonfiction'
            , author: 'Ryan Magoon'
            , read: true
        }
    ];
    bookRouter.route('/').get(function (req, res) {
        res.render('bookListView', {
            title: 'Hello from render',
            nav: nav,
            books: books
        });
    });
    bookRouter.route('/:id').get(function (req, res) {
        var id = req.params.id;
        res.render('bookView', {
            title: 'Hello from render',
            nav: nav,
            book: books[id]
        });
    });
    
    return bookRouter;
};
module.exports = router;