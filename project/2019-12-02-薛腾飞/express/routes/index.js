var express = require('express');
const http = require("http");
const path  = require("path");
const url   = require("url");
const fs    = require("fs"); 
const superagent = require("superagent");
const cheerio    = require("cheerio");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  superagent.get('https://book.douban.com/tag/%E7%BB%8F%E5%85%B8')
        .end(function(err, sres) {
            // 常规的错误处理
            if (err) {
                return next(err);
            }
            var items = [];
            // sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load，习惯性地命名为 `$`
            // 接下来就可以使用熟悉的 jquery 操作了
            var $ = cheerio.load(sres.text);
            $('#subject_list .subject-list .subject-item').each(function(index, element) {
                
                //var $img = $(element).find('img');
                var $img = $(element).find('img')
                var $topic = $(element).find('.pub');
                var $price = $(element).find('p')
                var $span = $(element).find('.rating_nums')
                var $name = $(element).find('a')
                items.push({
                    index:index,
                    author: $span.text(),
                    title: $topic.text(),
                    new: $price.text(),
                    name:$name.text(),
                    herf:$name.attr('href'),
                    id:index
                });
            });
            res.send(items);
            var item = JSON.stringify(items);
            console.log(item);
            fs.writeFile("boss.json",item,'utf-8',(error)=>{
                //监听错误，如正常输出，则打印null
                if(error==null){
                    console.log("恭喜您，数据爬取成功!请打开json文件，先Ctrl+A，再Ctrl+K,最后Ctrl+F格式化后查看json文件(仅限Visual Studio Code编辑器)");
                }
            });
        });
});

module.exports = router;
