const express = require('express')
const app = express()

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(server_port,server_ip_address, function () {
  console.log('Example app listening on port '+server_port+' for server '+server_ip_address+'!')
})