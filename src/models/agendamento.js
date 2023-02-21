const db = require("./db");

const Agendamento = db.sequelize.define("agendamento", {
  nome: {
    type: db.Sequelize.STRING,
  },

  celular: {
    type: db.Sequelize.STRING,
  },

  data: {
    type: db.Sequelize.DATE,
  },
  

  obs: {
    type: db.Sequelize.STRING,
  },

  campanha: {
    type: db.Sequelize.STRING,
  },
  
});

//Agendamento.sync({force: true})

module.exports = Agendamento;
