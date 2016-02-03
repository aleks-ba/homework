var bookController = function (Book) {

  var post = function (req, res) {
    //Создаем новый экземплр Book передавая в него тело запроса
    var book = new Book(req.body);
    //Сохраняем в базу

    if (!req.body.title) {
      res.status(400);
      res.send('Title is required');
    }

    else {
      book.save();
      //Ждем ответа и возвращаем сохраненный ответ
      res.status(201)
      res.send(book);
    }


  }

  var get = function (req, res) {
    var query = {};
    //req.query - get параметр по которому происходит фильтрации при выводе
    if (req.query.genre) {
      //фильтруем по жанру
      query.genre = req.query.genre;
    }

    //Запрос из базы с передаче параметра фильтра
    Book.find(query, function (err, books) {
      if (err) {
        res.status(500).send(err);
      }
      else {

        var returnBooks = [];
        books.forEach(function(book, index, array ){
          var newBook = book.toJSON();

          newBook.links = {};
          newBook.links.self = 'http://' + req.headers.host + '/api/books/' + newBook._id;
          returnBooks.push(newBook);
        });
        res.json(returnBooks);
      }
    })
  }

  return {
    post: post,
    get: get
  }
}

module.exports = bookController;

