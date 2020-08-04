const express = require('express');
const router = express.Router();
//const stripe = require('stripe')(`${process.env.SECRET_KEY}`);
const {
	customerController,
	paymentController,
	chargesController,
} = require('../controllers');

// routes

//
// GET
//
router.get('/', chargesController.findAllCharges);
router.get('/:id', chargesController.findChargesById);

//
// POST
//
router.post('/add_charge/:id', chargesController.createCharge);
//
// PUT
//

//
// DELETE
//

module.exports = router;
