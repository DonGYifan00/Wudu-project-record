var mysql = require('mysql');
var http = require('http');
var url = require('url')
var express = require('express');
var data = require('../content/data.json');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('guanliyuan',{chapterList:data.chapterList});
});

module.exports = router;



