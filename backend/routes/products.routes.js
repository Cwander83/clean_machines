const express = require('express');
const router = express.Router();
const { productController } = require('../controllers');

// routes

//
// GET
//


router.get('/', productController.findAllProducts);

router.post('/post', productController.createProductDB); // create product

// router.put('/update/:id', productController.updateProduct); // update single product
// router.put('/updateprice/:id/:price', productController.updateProductPrice); // update single product
//router.delete('/product/:id', productController.deleteProduct); // delete a product

module.exports = router;
