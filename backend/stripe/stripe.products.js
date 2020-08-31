const stripe = require('stripe')(`${process.env.STRIPE_SECRET_KEY}`);
const moment = require('moment');

module.exports = {
	createProduct: async (body) => {
		console.log('stripe: ' + body);
		return stripe.products
			.create({
				name: body.name,
				// object: 'product',
				caption: 'fast great machine to test and play with',
				images: [],
				shippable: true,
				type: 'good',
				//attributes: ['inventory', 'category', 'model'],

				metadata: {
					model: 'ABG1000',
					category: 'vacuum',
					sub_category: 'upright',

					weight: '14lbs',
					power_cord: '11 feet',

					category: 'upright',
					sale_price: '2000',
					rental_inventory: 1,
					rental_day: 30000,
					rental_two_day: 5900,
					rental_week: 100000,
					tools: 'handle thingy',
					height: '',
					width: '25 inches',
					motor: '',
					sound_pressure: '',
					container_capacity: '',
					tank_capacity: '',
					speed: '',
					size: '',

					feature_0: 'Triple action deep cleaning formula with Scotchgard',
					feature_1:
						'Cleaner, defoamer, odor neutralizer, carpet refresher All-in-one',
					feature_2:
						'Effectively powers out tough ground-in dirt, stubborn stains, underlying odors, embedded allergens, dust, pet dander pollen and more!',
				},
			})
			.then((result) => {
				const id = result.id;
				stripe.skus.create({
					price: 15000,
					currency: 'usd',
					product: id,
					inventory: { type: 'finite', quantity: 20 },
				});
				console.log('product created');
			})

			.catch((err) => console.error(err));
	},

	createSku: ({ id }) => {
		console.log(id);
		stripe.skus.create({
			price: 15000,
			currency: 'usd',
			product: id,
			inventory: { quantity: 20 },
		});
	},
	findSku: (id) => {
		return stripe.skus
			.retrieve(id)
			.then((result) => console.log(result))
			.catch((err) => console.error(err));
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
