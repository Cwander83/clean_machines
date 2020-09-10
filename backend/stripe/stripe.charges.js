const stripe = require('stripe')(`${process.env.STRIPE_SECRET_KEY}`);
const moment = require('moment');

module.exports = {
	createCharge: (id,{
        amount,
			shipping_name,
			shipping_phone,
			shipping_city,
			shipping_line1,
			shipping_line2,
			shipping_country,
			shipping_state,
			shipping_postal_code,
			
		}
	) => {
		//console.log('stripe customer: ' + JSON.stringify(items, null, 2));
		return stripe.charges.create({
			amount: amount,
			currency: 'usd',
			customer: id,

			// shipping: {
			// 	name: shipping_name,
			// 	phone: shipping_phone,
			// 	address: {
			// 		city: shipping_city,
			// 		line1: shipping_line1,
			// 		line2: shipping_line2,
			// 		country: shipping_country,
			// 		state: shipping_state,
			// 		postal_code: shipping_postal_code,
			// 	},
			// },

			//description: 'My First Test Customer (created for API docs)',
		});
	},
	findChargesById: (id) => {
		console.log(id);
		return stripe.charges.list({ customer: id });
	},

	findAllCharges: () => {
		return stripe.charges.list({ limit: 1 });
	},
};
