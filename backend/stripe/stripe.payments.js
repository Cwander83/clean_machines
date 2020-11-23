const stripe = require('stripe')(`${process.env.STRIPE_SECRET_KEY}`);

module.exports = {
	createPayment: (payment_method_id, totalPrice, customer) => {
		//console.log('customer payment : ' + JSON.stringify(customer, null, 2));
		return stripe.paymentIntents.create({
			payment_method: payment_method_id,
			billing_details: customer.billing,
			amount: totalPrice,
			confirm: true,
			customer: customer.id,
			setup_future_usage: 'on_session',
			receipt_email: customer.email,
			shipping: customer.shipping,
			currency: 'usd',
		});
	},
};
