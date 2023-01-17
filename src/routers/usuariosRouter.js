const express = require('express');// importa express

const usuariosRouter = express.Router();//cria a variavel routar e declara a função router

const usuariosController = require('../controllers/usuariosController'); // cria a variavel controller e importa o caminho da pasta controller

//criar rota para primeiro atributo
usuariosRouter.get('/entrar', usuariosController.show); // rota referente a função index q está na pasta buscacontroller
usuariosRouter.post('/login', usuariosController.login);
usuariosRouter.post('/store', usuariosController.store);
usuariosRouter.post('/registrar', usuariosController.registrar);

module.exports = usuariosRouter;// exporta o router para outros arquivos