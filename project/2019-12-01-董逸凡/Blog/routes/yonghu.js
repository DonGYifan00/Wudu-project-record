var mysql = require('mysql');
var http = require('http');
var url = require('url')
var express = require('express');
var data = require('../content/data.json');
var router = express.Router();

router.get('/', function(req, res, next) {
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'wudu'
    }); 
    connection.connect(); 
    connection.query('SELECT * FROM yonghu', function (error, results, fields) {
        res.render('yonghu',{chapterList:results});
    }); 
});

module.exports = router;



