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
router.post('/', function(req, res, next) {//实现按标签爬取书籍简单数据
    console.log('内容为',req.body.name)
    var data = req.body.name
    superagent.get(data)
        .end(function(err, sres) {
            // 常规的错误处理
            if (err) {
                return next(err);
            }
            var items = [];
            // sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load，习惯性地命名为 `$`
            // 接下来就可以使用熟悉的 jquery 操作了
            var $ = cheerio.load(sres.text);
            $('#wrapper').each(function(index, element) {
                
            //var $img = $(element).find('img');
            var $img = $(element).find('#mainpic img')
            var $span = $(element).find('#info span')
            var $a = $(element).find('#info a')
            var $div = $(element).find('#info')
            //var $is = $(element).find('')
            var $strong = $(element).find('#interest_sectl .ll rating_num')
            var $p = $(element).find('.indent .intro')
            var $name = $(element).find('h1 span')
            items.push({
                index:index,
                src:$img.attr('src'),
                span:$span.text(),
                div:$div.text(),
                //is:$is.text(),
                strong:$strong.text(),
                p:$p.text(),
                name:$name.text(),
                a:$a.text()

                });
            });
            var item = JSON.stringify(items);
            fs.writeFile("./boss1.json",item,'utf-8',(error)=>{
                //监听错误，如正常输出，则打印null
                if(error==null){
                    console.log("恭喜您，详细数据爬取成功!");
                }
            });
            fs.readFile('./boss1.json','utf-8',function (err,jsonData) {
                //console.log(JSON.parse(jsonData))
                var data = JSON.parse(jsonData);
                //console.log(typeof(data))
                if (err) {
                    console.log('dfdf')
                    res.send('err')
                    
                } else {
                    res.send(jsonData)
                }
                //res.json(data[0])
        
            })

        });
});

module.exports = router;
