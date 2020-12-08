const { createCustomer } = require('../stripe/stripe.customer');
const { createPayment } = require('../stripe/stripe.payments');
const { createPurchase, findCustomerById } = require('../db/db');

const { calculateOrderAmount } = require('../stripe/helpers');

//const stripe = require('stripe')(`${process.env.SECRET_KEY}`);

module.exports = {
	createPayment: async (req, res) => {
		let { payment_method_id, userData, productData, totals } = req.body;

		console.log('1');
		console.log('userData: ' + JSON.stringify(userData, null, 2));
		console.log('productData: ' + JSON.stringify(productData, null, 2));
		//const findSalesCustomerByEmail = await findCustomerById(userData)
		//console.log(findSalesCustomerByEmail);
		//const customer = await createCustomer(userData);

		const totalPrice = await calculateOrderAmount(totals);

		// const purchase = await createPurchase(
		// 	userData,
		// 	productData,
		// 	//customer,
		// 	totalPrice
		// );

		// TODO update DB with new inventory

		const paymentIntent = await createPayment(
			payment_method_id,
			totalPrice,
			userData,

			//customer
		);
		//await console.log('paymentIntent: ' + JSON.stringify(paymentIntent, null, 2));
		const sendOff = await res.send({
			clientSecret: paymentIntent.client_secret,
		});

		return sendOff;
	},
};
