const express = require('express');
const router = express.Router();
const {
	productController,
	salesController,
	rentalsController,
} = require('../controllers');

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

// sales
router.get('/recent', salesController.findRecentSales); // all products for sale
router.get('/unshipped', salesController.findAllSalesUnshipped); //update item to marked shipped
router.post('/update/:id', salesController.updateSales); // all products for sale
router.get('/allsales', salesController.findAllSales);

// rentals
router.get('/allrentals', rentalsController.findAllRentals);

// find all active rentals used in admin page * by the current date(today)
router.get('/active-rentals', rentalsController.findAllActiveRentals);

// uses the start date and end dates the user enters
router.get(
	'/available-rent/:start/:end',
	rentalsController.findAllProductsForRentAndAvailable
);

// find all active rentals used in admin page * by the current date(today)
router.get('/upcoming', rentalsController.findUpComingRentals);
// call single rental from database
router.get('/:id', rentalsController.findRentalById);
// find all rentals from database  *no queries
router.post('/update-rental/:id', rentalsController.updateRental);

module.exports = router;
