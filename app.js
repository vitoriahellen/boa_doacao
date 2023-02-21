// INICIANDO O EXPRESS
const express = require("express");
const app = express();
const Routes = require("./src/controller/Routes"); // IMPORTANDO ARQUIVO DE ROTAS




const bodyParser = require("body-parser");


app.use("/", Routes);




app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//IMPORTANDO ARQUIVOS JS, IMG E CSS
app.use("/css", express.static(__dirname + "/src/views/css"));
app.use("/js", express.static(__dirname + "/src/views/js"));
app.use("/img", express.static(__dirname + "/img"));





module.exports = app;
