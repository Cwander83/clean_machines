const stripe = require('stripe')(`${process.env.STRIPE_SECRET_KEY}`);
const moment = require('moment');

module.exports = {
	createProduct: ({ name, body }) => {
		return stripe.products.create({
			name,

			metadata: {
				weight: '14lbs',
				power_cord: '11 feet',
				inventory: 0,
				category: 'upright',
				price: '2000',
				start_date: moment().format('MMMM Do YYYY, h:mm:ss a'),

				0: 'Triple action deep cleaning formula with Scotchgard',
				2: 'Cleaner, defoamer, odor neutralizer, carpet refresher All-in-one',
				3: 'Effectively powers out tough ground-in dirt, stubborn stains, underlying odors, embedded allergens, dust, pet dander pollen and more!',
			},
			type: 'good',
		});
	},

	findSingleProduct: (id) => {
		return stripe.products.retrieve(id);
	},

	findCurrentProductsToSale: () => {
		return stripe.products.list({});
	},

	updateProduct: ({ id, body }) => {
		return stripe.products.update(id, {
			// TODO update
			metadata: {
				inventory: 2,
			},
		});
	},
	deleteProduct: ({ id }) => {
		return stripe.products.del(id);
	},
};
