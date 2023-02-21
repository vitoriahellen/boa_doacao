const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("boa_doacao", "vitoria", "123456", {
  host: "localhost",
  dialect: "mysql",
});

//CONEXÃO BANCO DE DADOS

sequelize
  .authenticate()
  .then(function () {
    console.log("Conexão Realizada");
  })
  .catch(function (err) {
    console.log("Erro ao realizar conexão: " + err);
  });

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
