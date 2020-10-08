const express = require('express');
const router = express.Router();
const { salesController } = require('../controllers');



router.get('/', salesController.findAllSales); // all products for sale
router.get('/recent', salesController.findRecentSales); // all products for sale
module.exports = router;
