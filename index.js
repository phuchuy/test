const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(6969, function () {
  console.log('Example app listening on port 6969!')
})