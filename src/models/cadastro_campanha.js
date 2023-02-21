const db = require("./db");

const NovaCampanha = db.sequelize.define("campanha", {
  titulo: {
    type: db.Sequelize.STRING,
  },

  resumo: {
    type: db.Sequelize.STRING,
  },

  endereco: {
    type: db.Sequelize.STRING,
  },

  data: {
    type: db.Sequelize.DATE,
  },

  
});

//NovaCampanha.sync({force: true})

module.exports = NovaCampanha;
