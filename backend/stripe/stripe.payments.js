const stripe = require('stripe')(`${process.env.SECRET_KEY}`);
const moment = require('moment');

module.exports = {
	createPayment: (payment_method_id, userData, { id }) => {
	
	
	return stripe.paymentIntents.create({
			payment_method: payment_method_id,
			amount: userData.amount,
			confirm: true,
			customer: id,
			setup_future_usage: 'on_session',

			currency: 'usd',
		});
	},
};
