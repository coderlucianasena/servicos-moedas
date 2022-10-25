const moedasDatabase = require("./database/moedas.json");

function getMoedas() {
  return moedasDatabase;
}

module.exports = {
  getMoedas,
};
