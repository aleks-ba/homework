//Поключаем express плагин для работы с http запросами
var express = require('express'),
    mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/book');
var Book = require('./models/bookModel');
var bodyParser = require('body-parser');


var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

bookRouter = require('./Routes/bookRoutes')(Book);
userAuth = require('./Routes/loginRoutes')
//authorRouter = require('./Routes/authorRouter')(Book);


app.use('/api', bookRouter);

app.get('/', function (req, res) {
  res.send('Gulp welcome to my API!');
});

app.listen(port, function () {

  console.log('Gulp is Running on PORT:' + port);
});
