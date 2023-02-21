const express = require("express");
const Routes = express.Router();

const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const { eAdmin } = require("../../middlewares/auth");

const bodyParser = require("body-parser");
Routes.use(bodyParser.urlencoded({ extended: true }));
Routes.use(bodyParser.json());

const CadastroOng = require("../models/cadastro_ong");
const Agendamento = require("../models/agendamento");
const NovaCampanha = require("../models/cadastro_campanha");


Routes.get("/", function (req, res) {
    res.sendFile("C:/Users/vitor/Desktop/Boa_Doacao1/src/views/index.html");
   
  });
  
 
  Routes.get("/sobre", function (req, res) {
    res.sendFile("C:/Users/vitor/Desktop/Boa_Doacao1/src/views/sobre.html");
  });
  
  Routes.get("/campanhas", function (req, res) {
    res.sendFile("C:/Users/vitor/Desktop/Boa_Doacao1/src/views/campanhas.html");
  });
  
  Routes.get("/agendamento", function (req, res) {
    res.sendFile("C:/Users/vitor/Desktop/Boa_Doacao1/src/views/agendamento.html");
  });

  Routes.get("/login", function (req, res) {
    res.sendFile("C:/Users/vitor/Desktop/Boa_Doacao1/src/views/login.html");
  });

  Routes.get("/home", function (req, res) {
    res.sendFile("C:/Users/vitor/Desktop/Boa_Doacao1/src/views/userAdmin/home.html");
  });

  Routes.get("/cadastro", function (req, res) {
    res.sendFile("C:/Users/vitor/Desktop/Boa_Doacao1/src/views/cadastro_ong.html");
  });

  Routes.get("/novacampanha", function (req, res) {
    res.sendFile("C:/Users/vitor/Desktop/Boa_Doacao1/src/views/userAdmin/novaCampanha.html");
  });

  Routes.get("/relatorios", function (req, res) {
    res.sendFile("C:/Users/vitor/Desktop/Boa_Doacao1/src/views/userAdmin/relatorios.html");
  });

 

    //Cadastra novo User ONG
Routes.post("/cadastrar_ong", async (req, res) => {

    if(req.body.rsocial != "" && req.body.cnpjcpf != "" && req.body.email != "" && req.body.senha!= ""){
    var dados = req.body;
    dados.senha = await bcrypt.hash(dados.senha, 8);
    //console.log(dados);
    await CadastroOng.create(dados)
    .then(function () {
      res.send("Cadastrado com Sucesso!");
      
    })
    .catch(function (err) {
      res.send("Erro ao cadastrar" + err);
    });
  }else{
    res.send("Preencha todos os Campos!");
  }
});

//SISTEMA DE LOGIN 
Routes.post("/login", async (req, res) => {
  var dados = req.body;
  const user = await CadastroOng.findOne({
    
    attributes: ['id', 'rsocial', 'email', 'senha'],
    
    where: {
      email: dados.email
      
    }
  });

  if(user === null){
    
    res.send("E-mail ou Senha Incorretos");
    return  "nodemon server.js"
    
  } 
  
  if (!(await bcrypt.compare(req.body.senha, user.senha))){
    
      res.send("E-mail ou Senha Incorretos");
      return  "nodemon server.js"
   
  } 

  var token = jwt.sign({id: user.id}, "D62ST92Y7A6V7K5C6W9ZU6W8KS3", {
    //expiresIn: 600 //10 min
    //expiresIn: 60 //1 min
    expiresIn: '7d' // 7 dia
});

return res.sendFile("C:/Users/vitor/Desktop/Boa_Doacao1/src/views/userAdmin/home.html");
});





//FIM SISTEMA DE LOGIN

    
//CADASTRO NO BANCO DE DADOS NOVO AGENDAMENTO
Routes.post("/cadastrar_agendamento", async (req, res) => { 
  if(req.body.nome != "" && req.body.celular != "" && req.body.data != "" && req.body.obs!= "" ){
    var dadosAgendamento = req.body; //PEGA OS ITENS DIGITADOS NA PAGINA E ATRIBUI A VARIAVEL 
    await Agendamento.create(dadosAgendamento) //ADD ITENS NO BANCO DE DADOS
    .then(function () {
      res.send("Cadastrado com Sucesso!", );
    
      
    })
    .catch(function (err) {
      res.send("Erro ao cadastrar" + err);
    });
  }else{
    res.send("Preencha todos os Campos!");
  }
});

//FIM

//CADASTRO NO BANCO DE DADOS NOVA CAMPANHA
Routes.post("/cadastrar_campanha", async (req, res) => { 
  if(req.body.titulo != "" && req.body.resumo != "" && req.body.endereco != "" && req.body.data!= ""){
    var dadosCampanha = req.body;
    await  NovaCampanha.create(dadosCampanha)
    .then(function () {
      res.send("Cadastrado com Sucesso!");
    })
    .catch(function (err) {
      res.send("Erro ao cadastrar" + err);
    });
  } else {
    res.send("Preencha todos os Campos!");
  }
  
   
});


Routes.get("/apicampanhas", async (req, res) => {
  await NovaCampanha.findAll({
    attributes: ['id', 'titulo', 'resumo', 'endereco', 'data'],
    order: [['id', "DESC"]]
})
.then((campanhas) => {
    return res.json({
        
        campanhas: campanhas,
        id_usuario_logado: req.userId
    });
}).catch(() => {
    return res.status(400).json({
        erro: true,
        mensagem: "Erro: Nenhuma campanha encontrado!"
    });
});    
});


Routes.get("/apiagendamentos", async (req, res) => {
  await Agendamento.findAll({
    attributes: ['id', 'nome', 'celular', 'data', 'obs', 'campanha'],
    order: [['id', "DESC"]]
})
.then((agendamentos) => {
    return res.json({
        
        agendamentos: agendamentos,
        id_usuario_logado: req.userId
    });
}).catch(() => {
    return res.status(400).json({
        erro: true,
        mensagem: "Erro: Nenhum Agendamento encontrado!"
    });
});    
});










 
 
  module.exports = Routes;
  

  
