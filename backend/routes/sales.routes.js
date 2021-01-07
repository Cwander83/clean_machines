const express = require('express');
const router = express.Router();
const { salesController } = require('../controllers');

router.get('/recent', salesController.findRecentSales); // all products for sale

router.get('/unshipped', salesController.findAllSalesUnshipped); //update item to marked shipped

router.post('/update/:id', salesController.updateSales); // all products for sale

router.get('/', salesController.findAllSales); // all products for sale

module.exports = router;
