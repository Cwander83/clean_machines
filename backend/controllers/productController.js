//const { Op } = require('sequelize');

const db = require('../config/config');


module.exports = {
	// create a product on DB
	createRentalProduct: (req, res) => {
		db.RentalProducts.create({
			name: req.body.name,
			model: req.body.model,
			category: req.body.category,
			rental_day: req.body.rental_day,
			rental_two_day: req.body.rental_two_day,
			rental_week: req.body.rental_week,
			short_description: req.body.short_description,
			cord: req.body.cord,
			weight: req.body.weight,
			height: req.body.height,
			width: req.body.width,
			tools: req.body.tools,
			motor: req.body.motor,
			sound_pressure: req.body.sound_pressure,
			container_capacity: req.body.container_capacity,
			tank_capacity: req.body.tank_capacity,
			speed: req.body.speed,
			size: req.body.size,
			feature_1: req.body.feature_1,
			feature_2: req.body.feature_2,
			feature_3: req.body.feature_3,
			feature_4: req.body.feature_4,
			feature_5: req.body.feature_5,
		})

			.then((data) => {
				res.json(data);
				console.log(JSON.stringify(data, null, 2));
				return data;
			})

			.catch((err) => console.log(err));
	},
	// create a product on DB
	createSalesProduct: (req, res) => {
		db.Products.create({
			name: req.body.name,
			model: req.body.model,
			category: req.body.category,
			sale_price: req.body.sale_price,
			shipping_cost: req.body.shipping_cost,
			units: req.body.units,
			short_description: req.body.short_description,
			cord: req.body.cord,
			weight: req.body.weight,
			height: req.body.height,
			width: req.body.width,
			tools: req.body.tools,
			motor: req.body.motor,
			sound_pressure: req.body.sound_pressure,
			container_capacity: req.body.container_capacity,
			tank_capacity: req.body.tank_capacity,
			speed: req.body.speed,
			size: req.body.size,
			feature_1: req.body.feature_1,
			feature_2: req.body.feature_2,
			feature_3: req.body.feature_3,
			feature_4: req.body.feature_4,
			feature_5: req.body.feature_5,
		})

			.then((data) => {
				res.json(data);
				console.log(JSON.stringify(data, null, 2));
				return data;
			})

			.catch((err) => console.log(err));
	},

	// all sales products
	findAllProducts: (req, res) => {
		db.Products.findAll({})
			.then((results) => {
				res.json(results);
				console.log(JSON.stringify(results, null, 2));
			})
			.catch((err) => console.error(err));
	},

	// all products to sale by category
	findAllProductsByCategory: async (req, res) => {
		const category = req.params.category;
		await db.Products.findAll({
			where: { category: category },
		})
			.then((results) => {
				res.status(200).json(results);
				//console.log(JSON.stringify(results, null, 2));
			})
			.catch((err) => console.error(err));
	},


	// find one products
	findProduct: (req, res) => {
		db.Products.findOne({
			where: { id: req.params.id },
		})
			.then((results) => {
				res.json(results);
				//console.log(JSON.stringify(results, null, 2));
			})
			.catch((err) => console.error(err));
	},

	// all products
	findAllRentalProducts: (req, res) => {
		db.RentalProducts.findAll()
			.then((results) => {
				res.json(results);
				console.log(JSON.stringify(results, null, 2));
			})
			.catch((err) => console.error(err));
	},
	
	// find one rental
	findRentalProduct: (req, res) => {
		db.RentalProducts.findOne({
			where: { id: req.params.id },
		})
			.then((results) => {
				res.json(results);
				//console.log(JSON.stringify(results, null, 2));
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
