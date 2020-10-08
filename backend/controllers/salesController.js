// TODO  all sales here
// * NOT ADMIN Sales page

const { Op } = require('sequelize');

const db = require('../config/config');

module.exports = {
	// all products to sale
	findAllProductsForSale: async (req, res) => {
		await db.Products.findAll({
			where: { units: { [Op.gt]: 0 } },
		})
			.then((results) => {
				res.status(200).json(results);
				//	//console.log(JSON.stringify(results, null, 2));
				return results;
			})
			.catch((err) => console.error(err));
	},



	// all products to sale by category
	findAllProductsBySubCategory: async (req, res) => {
		const category = req.params.subcategory;
		await db.Products.findAll({
			where: {
				[Op.and]: [{ sub_category: category }, { units: { [Op.gt]: 0 } }],
			},
		})
			.then((results) => {
				res.status(200).json(results);
				//	//console.log(JSON.stringify(results, null, 2));
				return results;
			})
			.catch((err) => console.error(err));
	},

	// TODO not correct
	// all products to sale
	findProductsById: async (req, res) => {
		const id = req.params.id;
		await db.Products.findAll({
			where: {
				[Op.and]: [{ id: id }, { units: { [Op.gt]: 0 } }],
			},
		})
			.then((results) => {
				res.status(200).json(results);
				//console.log(JSON.stringify(results, null, 2));
				return results;
			})
			.catch((err) => console.error(err));
	},

	// finds most recent 5 sales
	findRecentSales: async (req, res) => {
		await db.Sales.findAll({
			limit: 5,
			order: [['createdAt', 'ASC']],
			include: db.Products,
		})
			.then((results) => res.status(200).json(results))
			.catch((err) => console.error(err));
	},

	// find all sales with most recent first
	findAllSales: async (req, res) => {
		await db.Sales.findAll({
			//	order: [['createdAt', 'ASC']],
			//	include: db.Products
		})
			.then((results) => res.status(200).json(results))
			.catch((err) => console.error(err));
	},
};
