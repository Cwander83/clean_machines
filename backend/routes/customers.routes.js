const express = require('express');
const router = express.Router();
const {
	productController,
	pricesController,
	customerController,
} = require('../controllers');

// routes

//
// GET
//



//
// POST
//

router.post('add/:name', customerController.createCustomer); // create customer

//
// PUT
//



//
// DELETE
//



module.exports = router;
