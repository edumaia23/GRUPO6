const express = require('express');// importa express

const router = express.Router();//cria a variavel routar e declara a função router

const reservasController = require('../controllers/reservasController'); // cria a variavel controller e importa o caminho da pasta controller

//criar rota para primeiro atributo
router.get('/passagens/busca/reservas', reservasController.index); // rota referente a função index q está na pasta buscacontroller

//criar rota para reservas
router.get('/busca/reservas', reservasController.busca );// rota referente a função busca q está na pasta passagenscontroller


module.exports = router;// exporta o router para outros arquivos


