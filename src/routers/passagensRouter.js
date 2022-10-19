const express = require('express');// importa express

const router = express.Router();//cria a variavel routar e declara a função router

const passagensController = require('../controllers/passagensController'); // cria a variavel controller e importa o caminho da pasta controller

//criar rota para primeiro atributo
router.get('/', passagensController.index); // rota referente a função index q está na pasta buscacontroller

//criar rota para passagens
router.get('/passagens', passagensController.busca );// rota referente a função busca q está na pasta passagenscontroller


module.exports = router;// exporta o router para outros arquivos

//após o roteador ----e rota solicitada----segue para o controller renderizar a view