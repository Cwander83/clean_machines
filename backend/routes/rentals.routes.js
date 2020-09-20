const express = require('express');
const router = express.Router();
const { rentalsController } = require('../controllers');

// find all rentals from database  *no queries
router.get('/', rentalsController.findAllRentals);

// call single rental from database
router.get('/:id', rentalsController.findRentalById);

module.exports = router;
