const express = require('express');
const router = express.Router();
const { productController } = require('../controllers');

// routes

//
// GET
//

router.get('/', productController.findAllProducts); // all products
router.get('/sku/:id', productController.findProduct); // find one product by id
router.get('/rent', productController.findAllProductsForRent); // all products for rent
router.get(
	'/available-rent/:start/:end',
	productController.findAllProductsForRentAndAvailable
); // all products for rent
router.get('/sale', productController.findAllProductsForSale); // all products for sale
router.get('/out', productController.findAllProductsOutOfStock); // all products out of stock

router.post('/', productController.createProductDB); // create product

router.put('/update/:id', productController.updateProduct);

router.delete('/delete/:id', productController.deleteProduct);

module.exports = router;
