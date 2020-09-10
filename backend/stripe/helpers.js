module.exports = {
	calculateOrderAmount: (productData) => {
		let amount = 0;
		productData.forEach((obj, i) => {
			amount = amount + obj.total;
		});
		// Replace this constant with a calculation of the order's amount

		// Calculate the order total on the server to prevent

		// people from directly manipulating the amount on the client

		return amount;
	},
};
