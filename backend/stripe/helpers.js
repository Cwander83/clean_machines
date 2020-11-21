module.exports = {
	calculateOrderAmount: (totals) => {
		let number = totals.total.replace('.', '');

		return parseInt(number);
	},
};
