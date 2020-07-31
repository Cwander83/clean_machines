const db = require('../config/config');

module.exports = {
	// create a product
	createProductDB: (req, res) => {
		db.Products.create({
			name: req.body.name,
			model: req.body.model,
			category: req.body.category,
			sub_category: req.body.sub_category,
			sale_price: req.body.sale_price,
			rental_price: req.body.rental_price,
			sale_active: req.body.sale_active,
			rental_active: req.body.rental_active,
			units: req.body.units,
		})
			.then((product) =>
				db.Features.create({
					product_id: product.id,
					feature_0: req.body.feature_0,
					feature_1: req.body.feature_1,
					feature_2: req.body.feature_2,
					feature_3: req.body.feature_3,
					feature_4: req.body.feature_4,
					feature_5: req.body.feature_5,
					feature_6: req.body.feature_6,
					feature_7: req.body.feature_7,
					feature_8: req.body.feature_8,
					feature_9: req.body.feature_9,
				})
			)

			.then((data) => {
				res.json(data);
				console.log(JSON.stringify(data, null, 2));
				return data;
			})

			.catch((err) => console.log(err));
	},
	// all products
	findAllProducts: (req, res) => {
		db.Products.findAll({
			include: [{ model: db.Features, as: 'features' }],
		})
			.then((results) => {
				res.json(results);
				console.log(JSON.stringify(results, null, 2));
			})
			.catch((err) => console.error(err));
	},
	// all products to rent
	findAllProductsForRent: (req, res) => {},
	// all products to sale
	findAllProductsForSale: (req, res) => {},

	// find all products in a date range to rent
};

// // create a product
// createProduct: (req, res) => {
// 	const productName = req.params.name;
// 	// stripe function in stripe folder
// 	createProduct(productName)
// 		.then((result) => {
// 			res.status(200).json(result);
// 			console.log(result);
// 			return result;
// 		})
// 		.then((result) => {
// 			const product_id = result.id;
// 			addPriceToProduct(product_id);
// 			// adds price to stripe

// 			return result;
// 		})
// 		.then((result) => {
// 			console.log(`result: ${JSON.stringify(result, null, 2)}`);

// 			const data = {
// 				name: result.name,
// 				model: result.name,
// 				category: result.metadata.category,
// 				price: result.metadata.price,
// 				start_date: result.metadata.start_date,
// 				end_date: result.metadata.end_date,
// 				stripe_product_id: result.id,
// 			};
// 			console.log(result);
// 			Product.create(data);
// 		})
// 		.catch((err) => console.log(err));
// },

// // find single product
// findSingleProduct: (req, res) => {
// 	const productSkuId = req.params.id;
// 	findSingleProduct(productSkuId)
// 		.then((result) => {
// 			res.status(200).json(result);
// 			console.log(result);
// 		})
// 		.catch((err) => console.log(err));
// },

// // find and update a single product
// updateProduct: (req, res) => {
// 	const productSkuId = req.params.id;
// 	updateProduct(productSkuId)
// 		.then((result) => {
// 			res.status(200).json(result);
// 			console.log(result);
// 		})
// 		.catch((err) => console.log(err));
// },

// // find all products to sale *with inventory
// findCurrentProductsToSale: (req, res) => {
// 	findCurrentProductsToSale()
// 		.then((result) => {
// 			res.status(200).json(result);
// 			return result;
// 		})
// 		.then((result) => {
// 			const filtered = result.data.filter(
// 				(product) => product.name === 'Tester3'
// 			);

// 			return console.log(filtered);
// 		})

// 		.catch((err) => console.error(err));
// },

// // delete product from stripe
// deleteProduct: (req, res) => {
// 	const productSkuId = req.params.id;
// 	deleteProduct(productSkuId)
// 		.then()
// 		.catch((err) => console.error(err));
// },

// // update price on product
// updateProductPrice: (req, res) => {
// 	const productSkuId = req.params.id;
// 	const productNewPrice = req.params.price;
// 	updateProductPrice(productSkuId, productNewPrice)
// 		.then((result) => {
// 			res.status(200).json(result);
// 			console.log(result);
// 		})
// 		.catch((err) => console.log(err));
// },
