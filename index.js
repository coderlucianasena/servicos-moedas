const http = require("http");
const moedasDatabase = require("./database/moedas.json");

const server = http.createServer((request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");

  response.write(JSON.stringify(moedasDatabase));
  console.log(moedasDatabase);
  response.end();
});

server.listen(3000);
