var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var dbconfig = require("../config/dbconfig.json");
router.post('/',function(req,res,next) {
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query("select * from press",function(err,result) {
      if(err) {
        console.log(err);
      } else {
        console.log( result);
        res.send(result);
      }
    });
})
module.exports = router
