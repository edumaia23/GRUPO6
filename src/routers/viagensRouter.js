
const express = require('express');
const viagensController = require('../Controllers/viagensController');

const router = express.Router();

router.get('/', viagensController.index);


module.exports = router;