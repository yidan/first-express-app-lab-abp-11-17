var express = require('express')
var app = express()

// Build Your Route Here
app.get('/',function(req,res){
  res.send('Hello World!');
})

module.exports = app
