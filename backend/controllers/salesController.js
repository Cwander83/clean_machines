// TODO  all sales here

// TODO all rentals here

const db = require('../config/config');

// const {
// 	findAllSalesById,
// 	findAllRentalsById,
// 	findRentalById,
// } = require('../db/db');

module.exports = {
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
	// all products to sale by category
	findAllProductsByCategory: (req, res) => {
		const category = req.params.category;
		db.Products.findAll({
			where: { category: { category } },
		})
			.then((results) => {
				res.json(results);
				console.log(JSON.stringify(results, null, 2));
			})
			.catch((err) => console.error(err));
	},
	// all products to sale by category
	findAllProductsBySubCategory: (req, res) => {
		const category = req.params.sub - category;
		db.Products.findAll({
			where: { sub_category: category },
		})
			.then((results) => {
				res.json(results);
				console.log(JSON.stringify(results, null, 2));
			})
			.catch((err) => console.error(err));
	},

	// TODO not correct
	// all products to sale
	findProductsById: (req, res) => {
		const id = req.params.id;
		db.Products.findAll({
			where: { id: id },
		})
			.then((results) => {
				res.json(results);
				console.log(JSON.stringify(results, null, 2));
			})
			.catch((err) => console.error(err));
	},
};
