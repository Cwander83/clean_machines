const express = require('express');
const router = express.Router();
const { rentalsController } = require('../controllers');



// find all rentals from database  *no queries
router.get('/', rentalsController.findAllRentals);

// call single rental from database
router.get('/:id', rentalsController.findRentalById);


// uses the start date and end dates the user enters
router.get(
	'/available-rent/:start/:end',
	rentalsController.findAllProductsForRentAndAvailable
);

// find all active rentals used in admin page * by the current date(today)
router.get('/active-rentals', rentalsController.findAllActiveRentals)

module.exports = router;
