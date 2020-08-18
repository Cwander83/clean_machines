const { Op } = require('sequelize');

const db = require('../config/config');
const Rentals = require('../models/Rentals');
const moment = require('moment');
const { findRentalIds } = require('../db/db');
const { sequelize } = require('../config/config');
//const { deleteProduct } = require('../stripe/stripe.products');

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
			units: req.body.units,
			rental: req.body.rental,
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
				rental: 1,
			},
		})
			.then((products) => {
				res.json(products);
				console.log(JSON.stringify(products, null, 2));
			})

			.catch((err) => console.error(err));
	},

	// all products to rent
	findAllProductsForRentAndAvailable: async (req, res) => {
		try {
			const start = req.params.start;
			const end = req.params.end;

			let rentals = await db.Rentals.findAll({
				where: {
					[Op.and]: [
						{
							start_date: {
								[Op.between]: [
									sequelize.fn('date', sequelize.col('start_date')),
									end,
								],
							},
						},

						{
							end_date: {
								[Op.between]: [
									start,
									sequelize.fn('date', sequelize.col('end_date')),
								],
							},
						},
					],
				},
			}).then((rentals) => {
				let idArray = [];
				rentals.forEach((product) => idArray.push(product.productId));
				return idArray;
			});

			let products = await db.Products.findAll({
				where: {
					rental: 1,
					id: { [Op.notIn]: rentals },
				},
			});

			return res.json(products);
		} catch (error) {
			console.error(error);
		}
	},

	// find all rentals
	findAllRentals: (req, res) => {
		db.Rentals.findAll({
			include: db.Products,
		}).then((result) => res.json(result));
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

	// update a product
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
