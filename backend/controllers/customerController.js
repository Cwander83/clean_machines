const {
	createCustomer,
	createPayment,
	findAllCustomers,
	findSingleCustomer,
	updateCustomer,
	deleteCustomer,
	findCustomerCards,
} = require('../stripe/stripe.customer');
const { calculateOrderAmount } = require('../stripe/helpers');
const {findAllSalesById, findAllRentalsById} = require('../db/db')

const stripe = require('stripe')(`${process.env.SECRET_KEY}`);

module.exports = {
	findAllCustomers: async (req, res) => {
		//const customerName = req.params.name;
		// stripe function in stripe folder
		await findAllCustomers()
			.then((result) => {
				res.status(200).json(result);
				//console.log(JSON.stringify(result, null, 2));
				return result;
			})

			.catch((err) => console.log(err));
	},
	findSingleCustomer: async (req, res) => {
		// TODO ADD PRODUCT RENTALS AND PURCHASES

		await findSingleCustomer(req.params.id)
			.then((result) => {
				res.status(200).json(result);
				//console.log(JSON.stringify(result, null, 2));
				return result;
			})

			.catch((err) => console.log(err));
	},
	findAllSalesById: async (req, res) => {
		await findAllSalesById(req.params.id)
			.then((result) => {
				res.status(200).json(result);
			
				return result;
			})
			.catch((err) => console.error(err));
	},
	findAllRentalsById: async (req, res) => {
		await findAllRentalsById(req.params.id)
			.then((result) => {
				res.status(200).json(result);
			
				return result;
			})
			.catch((err) => console.error(err));
	},

	findCustomerCards: async (req, res) => {
		await findCustomerCards(req.params.id)
			.then((result) => {
				res.status(200).json(result);
				console.log(JSON.stringify(result, null, 2));
				return result;
			})

			.catch((err) => console.log(err));
	},

	updateCustomer: async (req, res) => {
		const id = req.params.id;
		const body = req.body;
		await updateCustomer(id, body)
			.then((result) => {
				res.status(200).json(result);
				console.log(JSON.stringify(result, null, 2));
				return result;
			})

			.catch((err) => console.log(err));
	},
};
