
const express = require('express');// importa express

const router = express.Router();//cria a variavel routar e declara a função router

const viagensController = require('../Controllers/viagensController'); // cria a variavel controller e importa o caminho da pasta controller

//criar rota para primeiro atributo
router.get('/', viagensController.index); // rota referente a função index q está na pasta viagenscontroller

//criar rota para busca
router.get('/busca', viagensController.busca );// rota referente a função busca q está na pasta viagenscontroller

//criar rota para viagens
router.get('/viagens', viagensController.viagens );// rota referente a função viagens q está na pasta viagenscontroller



module.exports = router;// exporta o router para outros arquivos

//após o roteador ----e rota solicitada----segue para o controller renderizar a view