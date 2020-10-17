export function totalFunc(cart) {
	const tax = 0.07;
	let shipping = 0;
	let total = 0;
	let subTotal = 0;
	let taxAmount = 0;

	cart.forEach((product) => {
		let newPrice = product.quantity * product.price;

		let newShipping = product.quantity * product.shipping;

		subTotal = newPrice + subTotal;

		shipping = shipping + newShipping;
	});

	total = (subTotal / 100).toFixed(2);

	shipping = (shipping / 100).toFixed(2);

	taxAmount = (total * tax).toFixed(2);

	total = (
		parseFloat(total) +
		parseFloat(taxAmount) +
		parseFloat(shipping)
	).toFixed(2);

	return {
		shipping,
		subTotal: (subTotal / 100).toFixed(2),
		total,
		taxAmount: parseFloat(taxAmount).toFixed(2),
	};
}
