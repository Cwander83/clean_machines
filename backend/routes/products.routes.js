const express = require('express');
const router = express.Router();
const { productController } = require('../controllers');

// all products * no queries
router.get('/', productController.findAllProducts);

router.get('/out', productController.findAllProductsOutOfStock); // all products out of stock

router.post('/', productController.createProductDB); // create product on DB

router.put('/update/:id', productController.updateProduct);

router.delete('/delete/:id', productController.deleteProduct);

module.exports = router;
