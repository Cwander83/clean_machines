const stripe = require('stripe')(`${process.env.STRIPE_SECRET_KEY}`);
const moment = require('moment');

module.exports = {
	addPriceToProduct: (id) => {
		console.log('prices: ' + id);
		stripe.prices.create({
			unit_amount: 2000,
			currency: 'usd',
			product: id,
		});
	},
	lookUpPrices: (id) => {
		return stripe.prices.list({});
	},
	lookUpSinglePrice: (id) => {
		// id has to be the price id not the product id
		return stripe.prices.retrieve(`${id}`);
	},
	

	updateProductPrice: ({ id, price }) => {
		return stripe.prices.update(`${id}`, price);
	},
};
