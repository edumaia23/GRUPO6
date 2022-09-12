
const express = require('express');
const viagensController = require('../Controllers/viagensController');

const router = express.Router();

router.get('/', viagensController.index);

//criar rota para busca
router.get('/busca', viagensController.busca );







module.exports = router;