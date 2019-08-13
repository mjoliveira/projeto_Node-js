const faker = require('faker');
const http = require('http');

const server = http.createServer();

server.on('request', function (request, response) {
  const randomName = faker.name.findName();

  response.write('Seu nome randomico: ' + randomName);
  response.end();
});

server.listen(3000);
console.log('Servidor está sendo executado.');
