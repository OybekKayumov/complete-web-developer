const http = require('http');

const server = http.createServer(() => {
  console.log('I hear you! Thanks for the request');
})

server.listen(3000);