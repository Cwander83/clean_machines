// TODO all rentals here

const db = require('../config/config');

// const {
// 	findAllSalesById,
// 	findAllRentalsById,
// 	findRentalById,
// } = require('../db/db');

module.exports = {
	findAllRentals: async (req, res) => {
      
		await db.Rentals.findAll({
			
		})
			.then((result) => {
				res.status(200).json(result);
				return result;
			})
			.catch((err) => console.error(err));
	},
	findRentalById: async (req, res) => {
      
		await db.Rentals.findOne({
			where: {
				id: req.params.id,
			},
		})
			.then((result) => {
				res.status(200).json(result);
				return result;
			})
			.catch((err) => console.error(err));
	},
};
