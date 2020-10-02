const express = require('express');
const router = express.Router();
const { salesController } = require('../controllers');


router.get('/:id', salesController.findProductsById);
router.get('/category/:category', salesController.findAllProductsByCategory);
router.get(
	'/sub-category/:subcategory',
	salesController.findAllProductsBySubCategory
);
router.get('/', salesController.findAllSales); // all products for sale
router.get('/recent', salesController.findRecentSales); // all products for sale
module.exports = router;
