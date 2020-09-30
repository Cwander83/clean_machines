const express = require('express');
const router = express.Router();
const { salesController } = require('../controllers');

router.get('/', salesController.findAllProductsForSale);
router.get('/:id', salesController.findProductsById);
router.get('/category/:category', salesController.findAllProductsByCategory);
router.get(
	'/sub-category/:subcategory',
	salesController.findAllProductsBySubCategory
);
router.get('/admin/all-sales', salesController.findAllSales); // all products for sale
router.get('/admin/recent-sales', salesController.findRecentSales); // all products for sale
module.exports = router;
