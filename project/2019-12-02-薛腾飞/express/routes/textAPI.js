var express = require('express');
var router = express.Router();
var fs = require('fs');
router.get('/', function(req, res, next) {
    fs.readFile('./boss.json','utf-8',function (err,jsonData) {
        //console.log(JSON.parse(jsonData))
        var data = JSON.parse(jsonData);
        //console.log(typeof(data))
        if (err) {
            console.log('dfdf')
            res.send('err')
            
        } else {
            res.json(jsonData)
        }
        //res.json(data[0])

    })
});

module.exports = router;