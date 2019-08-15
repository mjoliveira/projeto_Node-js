const faker = require('faker');
const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer();

server.on('request', function (request, response) {
  console.log('request.url:', request.url);

  const parsedUrl = url.parse(request.url);
  const parameters = querystring.parse(parsedUrl.query);

  console.log('parameters:', parameters);

  const nomeRandomico = faker.name.findName(parameters.template);
  const nomeRandomicoFormatado = faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}");

  response.write('Seu nome randômico: ' + nomeRandomico + '\n');
  response.write('Seu nome randômico formatado: ' + nomeRandomicoFormatado + '\n');
  response.end();
});

server.listen(3000);
console.log('Servidor está sendo executado.');
