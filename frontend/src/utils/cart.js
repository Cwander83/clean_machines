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
export function totalNoShippingFunc(cart) {
	const tax = 0.07;
	let shipping = 0;
	let total = 0;
	let subTotal = 0;
	let taxAmount = 0;

	cart.forEach((product) => {
		let newPrice = product.quantity * product.price;

		//let newShipping = product.quantity * product.shipping;

		subTotal = newPrice + subTotal;

		//shipping = shipping + newShipping;
	});

	total = (subTotal / 100).toFixed(2);

	//shipping = (shipping / 100).toFixed(2);

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

export const states = [
	'AL',
	'AK',
	'AS',
	'AZ',
	'AR',
	'CA',
	'CO',
	'CT',
	'DE',
	'DC',
	'FM',
	'FL',
	'GA',
	'GU',
	'HI',
	'ID',
	'IL',
	'IN',
	'IA',
	'KS',
	'KY',
	'LA',
	'ME',
	'MH',
	'MD',
	'MA',
	'MI',
	'MN',
	'MS',
	'MO',
	'MT',
	'NE',
	'NV',
	'NH',
	'NJ',
	'NM',
	'NY',
	'NC',
	'ND',
	'MP',
	'OH',
	'OK',
	'OR',
	'PW',
	'PA',
	'RI',
	'SC',
	'SD',
	'TN',
	'TX',
	'UT',
	'VT',
	'VA',
	'WA',
	'WV',
	'WI',
	'WY',
];
