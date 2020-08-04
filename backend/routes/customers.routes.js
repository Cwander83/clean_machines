const express = require('express');
const router = express.Router();
//const stripe = require('stripe')(`${process.env.SECRET_KEY}`);
const { customerController, paymentController } = require('../controllers');

// routes

//
// GET
//
router.get('/', customerController.findAllCustomers);
router.get('/:id', customerController.findSingleCustomer);
router.get('/cards/:id', customerController.findCustomerCards);

//
// POST
//
router.post('/create-payment-intent', paymentController.createPayment);

//
// PUT
//
router.put('/update/:id', customerController.updateCustomer);

//
// DELETE
//

module.exports = router;
