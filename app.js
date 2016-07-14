var express = require('express');

var app = express();

var port = process.env.PORT || 5000;
var bookRouter = express.Router();

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

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

bookRouter.route('/single')
    .get(function(req, res) {
    res.send('Hello Single Book');
});

app.use('/Books', bookRouter)


app.get('/', function(req, res) {
    res.render('index', {
        title: 'Hello from render',
        nav: [{
                Link: '/Books',
                Text: 'Books'},
              {
                Link: '/Authors',
                Text: 'Authors'
              }]});
});

app.get('/books', function(req, res) {
    res.send('Hello Books');
});
app.listen(port, function(err) {
    console.log('running server on port ' + port);
});