const db = require('../config/config');
const {} = require('../db/db');

module.exports = {
	findAllOrders: async (req, res) => {
		await db.Sales.findAll({
			order: [['createdAt', 'ASC']],
			include: db.Rentals,
		})
			.then((results) => res.status(200).json(results))
			.catch((err) => console.error(err));
	},
};
