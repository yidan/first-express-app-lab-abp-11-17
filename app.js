var express = require('express')
var app = express()

// Build Your Route Here
app.get("/", function(req, resp){
  resp.send("ttest")
})


module.exports = app
