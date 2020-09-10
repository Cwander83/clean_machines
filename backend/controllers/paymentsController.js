const { createCustomer } = require('../stripe/stripe.customer');
const { createPayment } = require('../stripe/stripe.payments');
const { createPurchase } = require('../db/db');

const { calculateOrderAmount } = require('../stripe/helpers');

const stripe = require('stripe')(`${process.env.SECRET_KEY}`);

module.exports = {
	createPayment: async (req, res) => {
		let { payment_method_id, userData, productData } = req.body;

		console.log('1');
		console.log('userData: ' + JSON.stringify(userData, null, 2));
		console.log('productData: ' + JSON.stringify(productData, null, 2));

		const customer = await createCustomer(userData); //

		const purchase = await createPurchase(userData, productData, customer);

		const totalPrice = await calculateOrderAmount(productData);

		const paymentIntent = await createPayment(
			payment_method_id,

			totalPrice,
			customer
		);
		const sendOff = await res.send({
			clientSecret: paymentIntent.client_secret,
		});

		return sendOff;
	},
};
