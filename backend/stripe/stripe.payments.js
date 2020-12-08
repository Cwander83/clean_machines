const stripe = require('stripe')(`${process.env.STRIPE_SECRET_KEY}`);

module.exports = {
	createPayment: (userData, payment_method_id, totalPrice) => {
		//console.log('customer payment : ' + JSON.stringify(customer, null, 2));
		return stripe.paymentIntents.create({
			payment_method: payment_method_id,

			amount: totalPrice,
			confirm: true,
			//customer: customer.id,
			setup_future_usage: 'on_session',
			receipt_email: userData.billing_email,
			//shipping: customer.shipping,
			currency: 'usd',
			description: `${userData.billing_name} ordered 16 items`,
		});
	},
};
