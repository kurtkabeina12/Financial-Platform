const express = require('express');
const router = express.Router();
const positionController = require('../controllers/positionController');

router.post('/open', positionController.openPosition);

module.exports = router;