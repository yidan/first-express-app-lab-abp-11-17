var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000)

if (process.env["LEARNING_ENVIRONMENT"]){
  console.log(`Visit: ${process.env["HOST_IP"]}:${process.env["RAILS_PORT"]}`)
} else {
  console.log(`Visit: http://localhost:3000`)
}