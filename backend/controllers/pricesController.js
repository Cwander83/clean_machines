// const { Product } = require('../models-1/index');
const {
	createProduct,
	findSingleProduct,
	findCurrentProductsToSale,
	updateProduct,
	deleteProduct,
} = require('../stripe/stripe.products');
const {
	addPriceToProduct,
	updateProductPrice,
	lookUpPrices,
	lookUpSinglePrice,
} = require('../stripe/stripe.prices');

module.exports = {
	lookUpPrices: (req, res) => {
		//	const price_id = req.params.id;
		lookUpPrices()
			.then((result) => {
				res.status(200).json(result);
				console.log(result);
			})
			.catch((err) => console.log(err));
	},

	lookUpSinglePrice: (req, res) => {
		// price id  not the product id
		const price_id = req.params.id;
		lookUpSinglePrice(price_id)
			.then((result) => {
				res.status(200).json(result);
				console.log(result);
			})
			.catch((err) => console.log(err));
	},

	lookupProductPrices: (req, res) => {
		let product_id = req.params.id;
		lookUpPrices()
			.then((result) => {
				res.status(200).json(result);

				return result;
			})

			.then((result) => {
				let pricesArray = [];
				for (const price of result.data) {
					if (price.product === product_id) pricesArray.push(price);
				}
				 console.log('price Array: ' + JSON.stringify(pricesArray,null,2));
			})
			.catch((err) => console.error(err));
	},
};
