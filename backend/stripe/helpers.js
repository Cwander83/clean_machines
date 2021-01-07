
module.exports = {
	calculateOrderAmount: (totals) => {
		let number = totals.total.replace('.', '');

		return parseInt(number);
	},
	createOrderNumber: () => {
		let year = new Date().getFullYear();
		let month = new Date().getMonth() + 1;
		let day = new Date().getDate();
		let random = Math.floor(1000 + Math.random() * 9000);

		return `${month}${day}${year}${random}`;
	},
};
