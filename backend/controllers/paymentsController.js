const { createCustomer } = require('../stripe/stripe.customer');
const { createPayment } = require('../stripe/stripe.payments');
const {
	createRental,
	createRentalAndSales,
	createSales,
	createDbCustomer,
} = require('../db/db');

const { calculateOrderAmount } = require('../stripe/helpers');

const stripe = require('stripe')(`${process.env.SECRET_KEY}`);

const rentalAndSales = (items, customer) => {
	if (items.rental_boolean && !items.sales_boolean)
		createRental(items, customer);

	if (items.rental_boolean && items.sales_boolean)
		createRentalAndSales(items, customer);

	if (items.sales_boolean && !items.rental_boolean)
		createSales(items, customer);

	return items;
};

module.exports = {
	createPayment: async (req, res) => {
		let { payment_method_id, userData } = req.body;

		console.log('1');
		console.log('userData: ' + JSON.stringify(userData, null, 2));

		const customer = await createCustomer(userData);
		const dbCustomer = await createDbCustomer(userData, customer);
		const rentAndSale = await rentalAndSales(userData, dbCustomer);

		console.log('customer' + JSON.stringify(rentAndSale, null, 2));

		const paymentIntent = await createPayment(
			payment_method_id,
			userData,
			customer
		);
		const sendOff = await res.send({
			clientSecret: paymentIntent.client_secret,
		});

		return sendOff;
	},
};
