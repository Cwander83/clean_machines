// TODO all rentals here

const db = require('../config/config');

module.exports = {
	// finds all rentals
	// used by rental page and admin page
	findAllRentals: async (req, res) => {
		await db.Rentals.findAll({
			include: db.RentalProducts,
			order: [['end_date', 'ASC']],
		})
			.then((result) => {
				res.status(200).json(result);
				return result;
			})
			.catch((err) => console.error(err));
	},

	// find all active rentals by the current date
	findAllActiveRentals: async (req, res) => {
		let currentDate = new Date();

		db.Rentals.findAll({
			where: {
				[Op.or]: [
					{
						start_date: {
							[Op.gte]: currentDate,
						},
					},

					{
						end_date: {
							[Op.gte]: currentDate,
						},
					},
				],
			},
			include: db.RentalProducts,
			order: [['end_date', 'ASC']],
		})
			.then((result) => {
				res.status(200).json(result);
				console.log(result);
				return result;
			})
			.catch((err) => console.error(err));
	},

	// all products to rent with a given start and end date
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

			let products = await db.RentalProducts.findAll({
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

	// search by id of the rental
	findRentalById: async (req, res) => {
		await db.Rentals.findOne({
			where: {
				id: req.params.id,
			},
			include: { model: db.RentalProducts },
		})
			.then((result) => {
				res.status(200).json(result);
				return result;
			})
			.catch((err) => console.error(err));
	},
};
