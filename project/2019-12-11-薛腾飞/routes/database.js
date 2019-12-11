var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var dbconfig = require("../config/dbconfig.json");

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('goodList', { title: 'EYE&EAR' });
// });
router.post('/',function(req,res,next) {
    var title = req.body.title.replace(/\s*/g,"");
    var name = req.body.name.replace(/\s*/g,"");
    var press = req.body.press.replace(/\s*/g,"");
    var isbn = req.body.isbn.replace(/\s*/g,"");
    var img = req.body.img.replace(/\s*/g,"");
    console.log(req.body)
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query("insert into press(title,name,press,isbn,img) values(?,?,?,?,?)",[title,name,press,isbn,img],function(err,result) {
      if(err) {
        console.log(err);
      } else {
        console.log(result);
        res.send('success');
      }
    });
});

/**
 * update chapters set content-? where chapterid=?
 */
module.exports = router;
