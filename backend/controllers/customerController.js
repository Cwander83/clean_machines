// const { Products } = require('../models/index');
const { createCustomer } = require('../stripe/stripe.customer');

module.exports = {
	createCustomer: (req, res) => {
		const customerName = req.params.name;
		// stripe function in stripe folder
		createCustomer(customerName)
			.then((result) => {
				res.status(200).json(result);
				console.log(result);
				return result;
			})

			.catch((err) => console.log(err));
	},
};
