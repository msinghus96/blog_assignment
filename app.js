var exp = require("express")
var app = exp()
var bp = require("body-parser")
var mong = require("mongoose")

//mong.connect('mongodb://localhost/blogs_master')
//mong.open('mongodb://localhost/blog')

var promise = mong.connect('mongodb://localhost/myapp', {
    useMongoClient: true,
    /* other options */
  });

var db = mong.connection;

app.get('/',function(req,res)
{
    res.send("done");
});

app.listen(5000);
console.log("runing on 2185");
