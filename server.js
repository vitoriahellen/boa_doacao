require("dotenv").config();

const app = require("./app");
const port = normalizaPort(process.env.PORT || "3333");

function normalizaPort(val) {
  const port = parseInt(val, 10);

  //isNaN é uma função que verifica se o número da porta é um valor indefinido! E retorna um verdadeiro ou falso!
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

app.listen(port, function () {
  console.log(`Servidor observando a porta: ${port}`);
});
