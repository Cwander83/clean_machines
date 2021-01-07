const express = require('express');
const router = express.Router();

const productRoutes = require('./products.routes');
const emailRoutes = require('./contact.routes');
const rentalRoutes = require('./rentals.routes');
const salesRoutes = require('./sales.routes');
const locationRoutes = require('./location.routes');

router.use('/products', productRoutes);
router.use('/mail', emailRoutes);
router.use('/rentals', rentalRoutes);
router.use('/sales', salesRoutes);
router.use('/location', locationRoutes);

module.exports = router;
