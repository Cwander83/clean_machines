// TODO  all sales here
// * NOT ADMIN Sales page

const { Op } = require('sequelize');

const db = require('../config/config');

module.exports = {
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
			order: [['createdAt', 'ASC']],
			include: db.Products,
		})
			.then((results) => res.status(200).json(results))
			.catch((err) => console.error(err));
	},
	// find all sales with most recent first
	findAllSalesUnshipped: async (req, res) => {
		await db.Sales.findAll({
			where: { shipped: false },
			order: [['createdAt', 'ASC']],
			include: db.Products,
		})
			.then((results) => res.status(200).json(results))
			.catch((err) => console.error(err));
	},
	
	// update sales item to marked as shipped

	updateSales: async (req, res) => {
		await db.Sales.update(req.body, {
			where: { id: req.params.id },
		})
			.then((results) => {
				res.json(results);
				console.log(JSON.stringify(results, null, 2));
			})
			.catch((err) => console.error(err));
	},
};
