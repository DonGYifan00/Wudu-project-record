const http       = require("http");
const path       = require("path");
const url        = require("url");
const fs         = require("fs"); 
const superagent = require("superagent");
const cheerio    = require("cheerio");
const express    = require('express');
var app = express(); 
app.get('/',function(req,res,next){
    superagent.get('https://search.douban.com/book/subject_search?search_text=%E5%B0%8F%E8%AF%B4&cat=1001')
        .end(function(err, sres) {
            // 常规的错误处理
            if (err) {
                return next(err);
            }
            var items = [];
            // sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load，习惯性地命名为 `$`
            // 接下来就可以使用熟悉的 jquery 操作了
            var $ = cheerio.load(sres.text);
            var $manager1 = $('#wrapper').children('#root')
            var  $manager2 = $manager1.children(".sc-gqjmRU jMcWWP")
            var $manager4 = $manager2.children().eq(1);
            var $manager3 = $manager2.attr('class')
            console.log($manager3)
            
            $manager2.each(function(index, element) {
                
                //var $img = $(element).find('img');
                //var $img = $(element).find('img')
                var $topic = $(element).find('.title-text a');
                //var $price = $(element).find('.rating_nums')
                var $span = $(element).find('img')
                items.push({
                    index:index,
                    //src:$img.attr('src'),
                    span: $span.attr('src'),
                    title: $topic.text(),
                    //new: $price.text(),
                    //herf:$topic.attr('href'),
                    //id:index
                });
            });
            res.send(items)
            var item = JSON.stringify(items);
            fs.writeFile("./boss.json",item,'utf-8',(error)=>{
                //监听错误，如正常输出，则打印null
                if(error==null){
                    console.log("恭喜您");
                }
            });
        });
})　　
app.listen(4000,function(){
    
})
