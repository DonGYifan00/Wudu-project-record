var express = require('express');
const http = require("http");
const path  = require("path");
const url   = require("url");
const fs    = require("fs"); 
const superagent = require("superagent");
const cheerio    = require("cheerio");
var bodyParser = require('body-parser');
var app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {//实现按标签爬取书籍详细数据
  
    
            fs.readFile('./boss.json','utf-8',function (err,jsonData) {
                //console.log(JSON.parse(jsonData))
                var data = JSON.parse(jsonData);
                //console.log(typeof(data))
                if (err) {
                    console.log('dfdf')
                    res.send('err')
                    
                } else {
                  console.log("恭喜您，成功读取了文件")
                    res.send(jsonData)
                }
                //res.json(data[0])
        
            })

        });


module.exports = router;
