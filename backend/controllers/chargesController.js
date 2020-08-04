const { createCustomer } = require('../stripe/stripe.customer');
const { createPayment } = require('../stripe/stripe.payments');
const {
	findAllCharges,
	findChargesById,
	createCharge,
} = require('../stripe/stripe.charges');

const { calculateOrderAmount } = require('../stripe/helpers');

// const stripe = require('stripe')(`${process.env.SECRET_KEY}`);

module.exports = {
	createCharge: async (req, res) => {
		//const { items } = req.body;
		//const customerName = req.params.name;
		// stripe function in stripe folder
		console.log(req.body);
		await createCharge(req.params.id, req.body)
			.then((result) => {
				res.status(200).json(result);
				console.log(JSON.stringify(result, null, 2));
				return result;
			})

			.catch((err) => console.log(err));
	},
	findAllCharges: async (req, res) => {
		//const customerName = req.params.name;
		// stripe function in stripe folder
		await findAllCharges()
			.then((result) => {
				res.status(200).json(result);
				console.log(JSON.stringify(result, null, 2));
				return result;
			})

			.catch((err) => console.log(err));
	},
	findChargesById: async (req, res) => {
		// TODO ADD PRODUCT RENTALS AND PURCHASES

		await findChargesById(req.params.id)
			.then((result) => {
				res.status(200).json(result);
				console.log(JSON.stringify(result, null, 2));
				return result;
			})

			.catch((err) => console.log(err));
	},
};
