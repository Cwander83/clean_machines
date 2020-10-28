const express = require('express');
const router = express.Router();
const { productController } = require('../controllers');

// all products * no queries
router.get('/sales', productController.findAllProducts);
router.get('/sales/:id', productController.findProduct);
router.get(
	'/sales/category/:category',
	productController.findAllProductsByCategory
);
router.get('/rental', productController.findAllRentalProducts);
router.get('/rental/:id', productController.findRentalProduct);

router.get('/out', productController.findAllProductsOutOfStock); // all products out of stock

router.post('/rental', productController.createRentalProduct); // create product on DB
router.post('/sales', productController.createSalesProduct); // create product on DB

router.put('/update/:id', productController.updateProduct);

router.delete('/delete/:id', productController.deleteProduct);

module.exports = router;
