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
	if (items.rental_boolean && items.sales_boolean) createRentalAndSales(items, customer);
	if (items.sales_boolean && !items.rental_boolean) createSales(items, customer);
	return items;
};

module.exports = {
	createPayment: async (req, res) => {
		const { items } = req.body;
		console.log('items: ' + JSON.stringify(items, null, 2));
		// Create a PaymentIntent with the order amount and currency
		console.log('1');
		const customer = await createCustomer(items);
		const dbCustomer = await createDbCustomer(items,customer);
		const rentAndSale = await rentalAndSales(items, dbCustomer);
		// if (items.rental === true) await createRental(items, customer);
		// if (items.rental === true && items.sales === true)
		// 	await createRentalAndSales(items, customer);
		// if (items.sale === true && items.rental === false)
		// 	await createSales(items, customer);

		//console.log('customer' + JSON.stringify(customer, null, 2));

		const paymentIntent = await createPayment(rentAndSale, customer);
		const sendOff = await res.send({
			clientSecret: paymentIntent.client_secret,
		});

		return sendOff;
	},
};
