
const express = require('express');

const router = express.Router();

const viagensController = require('../Controllers/viagensController');

//criar rota para primeiro atributo
router.get('/', viagensController.index);

//criar rota para busca
router.get('/busca', viagensController.busca );

//criar rota para viagens
router.get('/viagens', viagensController.viagens );






module.exports = router;