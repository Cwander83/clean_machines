const express = require('express');
const router = express.Router();
const { productController } = require('../controllers');

// routes

//
// GET
//

router.get('/', productController.findAllProducts); // all products

router.get('/rent', productController.findAllProductsForRent); // all products for rent

router.get(
	'/available-rent/:start/:end',
	productController.findAllProductsForRentAndAvailable
); // all products for rent

router.get('/sale', productController.findAllProductsForSale); // all products for sale
router.get('/sales', productController.findAllSales); // all products for sale
router.get('/recent-sales', productController.findRecentSales); // all products for sale
router.get('/out', productController.findAllProductsOutOfStock); // all products out of stock

router.get('/rentals', productController.findAllRentals);
router.get('/active-rentals', productController.findAllActiveRentals);

router.post('/', productController.createProductDB); // create product on DB

router.put('/update/:id', productController.updateProduct);

router.delete('/delete/:id', productController.deleteProduct);

module.exports = router;
