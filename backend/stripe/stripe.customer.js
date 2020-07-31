const stripe = require('stripe')(`${process.env.STRIPE_SECRET_KEY}`);
const moment = require('moment');

module.exports = {
	createCustomer: ({ name, body }) => {
		return stripe.customers.create({
			// address: {
			// 	line1: '25 appp dr',
			// 	city: 'columbus',
			// 	line2: 'unit 4',
			// 	postal_code: 32807,
			// },
			// email: 'abc@abc.com',
			description: 'My First Test Customer (created for API docs)',
		});
	},
};
