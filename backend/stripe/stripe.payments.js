const stripe = require('stripe')(`${process.env.SECRET_KEY}`);
const moment = require('moment');

module.exports = {
	createPayment: (items, { id }) => {
		console.log('3');
		return stripe.paymentIntents.create({
			amount: items.amount,

			customer: id,
			setup_future_usage: 'on_session',

			currency: 'usd',
		});
	},
};
