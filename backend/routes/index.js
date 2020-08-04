const express = require('express');
const router = express.Router();

const customerRoutes = require('./customers.routes');
const chargesRoutes = require('./charges.routes');
const productRoutes = require('./products.routes');

router.use('/customers', customerRoutes);
router.use('/charges', chargesRoutes);
router.use('/products', productRoutes);

module.exports = router;
