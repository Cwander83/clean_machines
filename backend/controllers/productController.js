const { Op } = require('sequelize');

const db = require('../config/config');
const { deleteProduct } = require('../stripe/stripe.products');

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
			units: req.body.units_sale,
			rental_units: req.body.rental_units,
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

			.then((data) => {
				res.json(data);
				console.log(JSON.stringify(data, null, 2));
				return data;
			})

			.catch((err) => console.log(err));
	},
	// all products
	findAllProducts: (req, res) => {
		db.Products.findAll()
			.then((results) => {
				res.json(results);
				console.log(JSON.stringify(results, null, 2));
			})
			.catch((err) => console.error(err));
	},
	// all products
	findProduct: (req, res) => {
		db.Products.findOne({
			where: { id: req.params.id },
		})
			.then((results) => {
				res.json(results);
				console.log(JSON.stringify(results, null, 2));
			})
			.catch((err) => console.error(err));
	},

	// all products to rent
	findAllProductsForRent: (req, res) => {
		db.Products.findAll({
			where: {
				rental_units: {
					[Op.gt]: 0,
				},
			},
		})
			.then((results) => {
				res.json(results);
				console.log(JSON.stringify(results, null, 2));
			})
			.catch((err) => console.error(err));
	},

	// all products to sale
	findAllProductsForSale: (req, res) => {
		db.Products.findAll({
			where: { units: { [Op.gt]: 0 } },
		})
			.then((results) => {
				res.json(results);
				console.log(JSON.stringify(results, null, 2));
			})
			.catch((err) => console.error(err));
	},

	// all products out of stock
	findAllProductsOutOfStock: (req, res) => {
		db.Products.findAll({
			where: { units: 0 },
		})
			.then((results) => {
				res.json(results);
				console.log(JSON.stringify(results, null, 2));
			})
			.catch((err) => console.error(err));
	},

	updateProduct: (req, res) => {
		db.Products.update(req.body, {
			where: { id: req.params.id },
		})
			.then((results) => {
				res.json(results);
				console.log(JSON.stringify(results, null, 2));
			})
			.catch((err) => console.error(err));
	},

	// delete product
	deleteProduct: (req, res) => {
		db.Products.destroy({
			where: { id: req.params.id },
		})
			.then(() => {})
			.catch((err) => console.error(err));
	},
};
