var http = require('http');
var time = Math.random();

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('time: ' + time);
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');
