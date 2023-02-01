const http = require('http');
const { url } = require('inspector');

const server = http.createServer((request, response) => {
  // console.log('I hear you! Thanks for the request');
  // console.log("headers ", request.headers);
  console.log('method', request.method);
  console.log('url', request.url);

  response.setHeader('Content-Type', 'text/html');
  response.end('<h1>Hello</h1>')
})

server.listen(3000);