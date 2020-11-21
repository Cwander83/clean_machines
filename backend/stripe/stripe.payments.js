const stripe = require('stripe')(`${process.env.STRIPE_SECRET_KEY}`);
//const moment = require('moment');

module.exports = {
	createPayment: (payment_method_id, totalPrice, customer) => {
		return stripe.paymentIntents.create({
			payment_method: payment_method_id,

			amount: totalPrice,
			confirm: true,
			customer: customer.id,
			setup_future_usage: 'on_session',

			currency: 'usd',
		});
	},
};
