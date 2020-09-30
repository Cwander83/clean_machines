const express = require('express');
const router = express.Router();
const { salesController } = require('../controllers');

router.get('/', salesController.findAllProductsForSale);
router.get('/:id', salesController.findProductsById);
router.get('/:category', salesController.findAllProductsByCategory);
router.get('/:sub-category', salesController.findAllProductsBySubCategory);


module.exports = router;
