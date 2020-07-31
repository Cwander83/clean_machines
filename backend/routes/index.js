const express = require('express');
const router = express.Router();

const customerRoutes = require('./customers.routes');
const priceRoutes = require('./prices.routes');
const productRoutes = require('./products.routes');

router.use('/customer', customerRoutes);
router.use('/price', priceRoutes);
router.use('/products', productRoutes);

module.exports = router;
