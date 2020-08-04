const stripe = require('stripe')(`${process.env.SECRET_KEY}`);
const moment = require('moment');

module.exports = {
	createCustomer: ({
		name,
		phone,
		email,
		line1,
		line2,
		city,
		postal_code,
		country,
		state,
		shipping_name,
		shipping_phone,
		shipping_city,
		shipping_line1,
		shipping_line2,
		shipping_country,
		shipping_state,
		shipping_postal_code,
	}) => {
		console.log('2');
		//console.log('stripe customer: ' + JSON.stringify(items, null, 2));
		return stripe.customers.create({
			address: {
				line1: line1,
				city: city,
				line2: line2,
				postal_code: postal_code,
				country: country,
				state: state,
			},
			shipping: {
				name: shipping_name,
				phone: shipping_phone,
				address: {
					city: shipping_city,
					line1: shipping_line1,
					line2: shipping_line2,
					country: shipping_country,
					state: shipping_state,
					postal_code: shipping_postal_code,
				},
			},
			name,
			email,
			phone,
			//description: 'My First Test Customer (created for API docs)',
		});
	},

	findSingleCustomer: (id) => {
		console.log(id);
		return stripe.customers.retrieve(id);
	},

	findAllCustomers: () => {
		return stripe.customers.list({});
	},

	updateCustomer: (
		id,
		{
			name,
			phone,
			email,
			line1,
			line2,
			city,
			postal_code,
			country,
			state,
			shipping_name,
			shipping_phone,
			shipping_city,
			shipping_line1,
			shipping_line2,
			shipping_country,
			shipping_state,
			shipping_postal_code
		}
	) => {
		
		return stripe.customers.update(id, {
			// TODO update
			address: {
				line1: line1,
				city: city,
				line2: line2,
				postal_code: postal_code,
				country: country,
				state: state,
			},
			shipping: {
				name: shipping_name,
				phone: shipping_phone,
				address: {
					city: shipping_city,
					line1: shipping_line1,
					line2: shipping_line2,
					country: shipping_country,
					state: shipping_state,
					postal_code: shipping_postal_code,
				},
			},
			email,
			name,
			phone,
		});
	},
	deleteCustomer: ({ id }) => {
		return stripe.customers.del(id);
	},
	findCustomerCards: (id) => {
		return stripe.customers.listSources(id, {
			object: 'card',
		});
	},
};
