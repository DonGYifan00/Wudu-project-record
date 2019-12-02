var mysql = require('mysql');
var http = require('http');
var url = require('url')
var express = require('express');
var data = require('../content/data.json');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login');
});

router.post("/yonghu",function(req,res,next){
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'wudu'
  }); 
  connection.connect(); 
  connection.query('SELECT * FROM guanli', function (error, results, fields) {
    if (error) throw error;
    for(var i = 0; i < results.length; i++){
      if(results[i].id !== req.body.user && results[i].name !== req.body.pwd){
        res.render('error',{message:'账号或密码错误！'});
      }
      else{
        res.render('yonghu',{chapterList:data.chapterList});
        return;
      }
    } 
  });   
});

module.exports = router;



