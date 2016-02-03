var mysql = require('mysql');

var pool  = mysql.createPool({
  connectionLimit : 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
});

pool.query('SELECT * FROM users', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows);
});

function Connection() {
  this.pool = null;

  this.init = function() {
    this.pool = mysql.createPool({
      connectionLimit: 10,
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'test'
     });
  }

  this.acquire = function(callback) {
    this.pool.getConnection(function(err, connection){
      callback(err,connection);
    })
  }
}

module.exports = new Connection();