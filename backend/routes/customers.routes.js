const express = require('express');
const router = express.Router();

const { customerController, paymentController } = require('../controllers');

// routes

//
// GET
//
router.get('/', customerController.findAllCustomers);
router.get('/:id', customerController.findSingleCustomer);
router.get('/cards/:id', customerController.findCustomerCards);
router.get('/sales/:id', customerController.findAllSalesById);
router.get('/rentals/:id', customerController.findAllRentalsById);

//
// POST
//
router.post('/pay', paymentController.createPayment);

//
// PUT
//
router.put('/update/:id', customerController.updateCustomer);

//
// DELETE
//

module.exports = router;
