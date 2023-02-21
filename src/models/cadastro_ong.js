const db = require("./db");

const CadastroOng = db.sequelize.define("ongs", {
  rsocial: {
    type: db.Sequelize.STRING,
  },

  cnpjcpf: {
    type: db.Sequelize.STRING,
  },

  telefone: {
    type: db.Sequelize.STRING,
  },

  email: {
    type: db.Sequelize.STRING,
  },

  senha: {
    type: db.Sequelize.STRING,
  },
});

//CadastroOng.sync({force: true})

module.exports = CadastroOng;
