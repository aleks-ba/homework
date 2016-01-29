var http = require('http'),
    express = require('express'),
    app = express(),
    path    = require("path"),
    mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database: 'yii2basic'
});




