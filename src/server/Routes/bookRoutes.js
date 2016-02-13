var express = require('express');

var routes = function (Book) {
  var bookRouter = express.Router();
  var bookController = require("../Controllers/bookController.js")(Book);


  bookRouter.route('/books')
  //При post запросе...
      .post(bookController.post)
  //При get запросе...
      .get(bookController.get);


bookRouter.use('/books/:bookId', function(req, res, next) {
  Book.findById(req.params.bookId, function (err, book) {
    if (err) {
      //res.status(500).send(err);
      res.send("There is not book with this ID");
    }
    else {
      if (book) {
        req.book = book;
        next();
      }
      else {
        res.send("There is not book with this ID");
      }
    }
  })
});
  bookRouter.route('/books/:bookId')
      .get(function (req, res) {

        var returnBook = req.book.toJSON();
        returnBook.links = {};
        returnBook.links.FilterByThisGenre = 'http://' + req.headers.host + '/api/books/?genre=' + returnBook.genre;
        res.json(returnBook);
      })

      .put(function(req, res){
        console.log(req.body);
        req.book.title = req.body.title;
        req.book.author = req.body.author;
        req.book.genre = req.body.genre;
        req.book.read = req.body.read;
        req.book.save();
        res.json(req.book);
      })

      .patch(function(req, res){
        if (req.body._id) {
          delete req.body._id;
        }
        for (var p in req.body) {
          req.book[p] = req.body[p];
        }

        req.book.save(function(err) {
          if (err) {
            res.send("There is not book with this ID");

          }
          else {
            res.json(req.book);

          }
        });


      })

      .delete(function(req,res) {
        req.book.remove(function(err) {
          if (err) {
            res.status(500).send(err);
          }
          else {
            res.status(204).send('Removed');
          }
        });
      })

  return bookRouter;

};

module.exports = routes;