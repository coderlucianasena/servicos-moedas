const express = require("express");

const moedasDatabase = require("./database/moedas.json");

const server = express();

server.get("/home", (request, response) => {
    response.json("Seja bem vindo!");
});

server.get("/", (request, response) => {
    response.setHeader("Acess-Control-Allow-Origin", "*"); 

    // response.write(JSON.stringify(moedasDatabase));
    // console.log(moedasDatabase);
    // response.json(moedasDatabase);
});

server.listen(8000);
