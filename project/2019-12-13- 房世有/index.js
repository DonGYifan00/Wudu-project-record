var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var dbconfig = require("../config/dbconfig.json");
var app = express();
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('goodList', { title: 'EYE&EAR' });
// });
router.post('/login',function(req,res,next) { 
  var username = req.body.username;
  var password = req.body.password;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from user where username = ? and password = ?",[username,password],function(err,result) {
    if(err) {
      console.log(err);
    } else {
      console.log( result);
      res.send(result);
    }
  });
});  
router.post('/zhuce1',function(req,res,next) {
  var username = req.body.username;
  var password = req.body.password;
  var mobile = req.body.mobile;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("insert into user(username,password,mobile) values(?,?,?)",[username,password,mobile],function(err,result) {
    if(err) {
      console.log(err);
    } else {
      res.send('success');
    }
  });
});
router.get('/del',function(req,res,next) {
  var chapterId = req.query.chapterid;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from chapters where chapterid=?",[chapterId],function(err,result) {
    if(err) {
      console.log(err);
    } else {
      res.end("delete success");
    }
  })
});

router.post('/shoucang',function(req,res,next) {
  var bname = req.body.bname;
  var sctime = req.body.sctime;
  var tuurl = req.body.tuurl;
  var author = req.body.author;
  console.log(bname);
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("insert into shoucang(bname,sctime,tuurl,author) values(?,?,?,?)",[bname,sctime,tuurl,author],function(err,result) {
    if(err) {
      console.log(err);
    } else {
      console.log(result);
      res.send('success');
    }
  });
});


router.post('/wdshoucang',function(req,res,next) {
  var bname = req.body.bname;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from shoucang",function(err,result) {
    if(err) {
      console.log(err);
    } else {
      console.log( result);
      res.send(result);
    }
  });
});

router.post('/pdshoucang',function(req,res,next) {
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from shoucang",function(err,result) {
    if(err) {
      console.log(err);
    } else {
      console.log( result);
      res.send(result);
    }
  });
});
router.post('/quxiaosc',function(req,res,next) {
  var bname = req.body.bname;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from shoucang where bname=?",[bname],function(err,result) {
    if(err) {
      console.log(err);
    } else {
      console.log(result);
      res.end("delete success");
    }
  })
});
router.post('/pinglun',function(req,res,next) {
  var username = req.body.username;
  var bookname = req.body.bookname;
  var content = req.body.content;
  var time = req.body.time;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("insert into pinglun(username,bookname,content,time) values(?,?,?,?)",[username,bookname,content,time],function(err,result) {
    if(err) {
      console.log(err);
    } else {
      res.send('success');
    }
  });
});
router.post('/shouye',function(req,res,next) {
  var name = req.body.name;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from pinglun where username =?",[name],function(err,result) {
    if(err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
router.post('/pinglunxs',function(req,res,next) {
  var bname = req.body.bookname;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from pinglun where bookname =?",[bname],function(err,result) {
    if(err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


/**
 * update chapters set content-? where chapterid=?
 */
module.exports = router;
