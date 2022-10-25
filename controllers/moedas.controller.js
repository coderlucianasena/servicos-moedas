const moedaModel = require("../models/moedas");

const controller = {
  welcome(request, response) {
    response.json("Seja bem vindo");
  },

  listMoedas(request, response) {
    response.setHeader("Access-Control-Allow-Origin", "*");

    const moedasDatabase = moedaModel.getMoedas();

    response.json(moedasDatabase);
  },
};

module.exports = controller;
