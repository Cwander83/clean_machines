const express = require('express');
const router = express.Router();

const customerRoutes = require('./customers.routes');
const chargesRoutes = require('./charges.routes');
const productRoutes = require('./products.routes');
const emailRoutes = require('./contact.routes');

router.use('/customers', customerRoutes);
router.use('/charges', chargesRoutes);
router.use('/products', productRoutes);
router.use('/mail', emailRoutes);

module.exports = router;
