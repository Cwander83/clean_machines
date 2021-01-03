module.exports = {
	calculateOrderAmount: (totals) => {
		let number = totals.total.replace('.', '');

		return parseInt(number);
	},
	createOrderNumber: () => {
		let year = new Date().getFullYear();
		let month = new Date().getMonth();
		let day = new Date().getDay();
		let random = Math.floor(10000 + Math.random() * 90000);

		return `${month}${day}${year}${random}`;
	},
};
