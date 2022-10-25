const express = require("express");
const moedaController = require("../controllers/moedas.controller");
const routes = express.Router();

routes.get("/home", moedaController.welcome);

routes.get("/", moedaController.listMoedas);

module.exports = routes;
