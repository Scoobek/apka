const http = require('http');

const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(process.env.PORT || 5000, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});