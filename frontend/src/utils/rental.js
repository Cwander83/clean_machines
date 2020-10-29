import moment from 'moment';
export function rentalCost({ product, rentalDates }) {
	let cost = 0;
	let a = moment(rentalDates.endDate).format('MM/DD/YYYY');
	let b = moment(rentalDates.startDate).format('MM/DD/YYYY');
	let days = b.diff(a, 'days');

	console.log('days ' + days);

	// do {
	// 	switch (true) {
	// 		case days >= 7:
	// 			cost = cost + product.rental_week;
	// 			days = days - 7;
	// 			break;

	// 		case days >= 2:
	// 			cost = cost + product.rental_two_day;
	// 			days = days - 2;

	// 			break;
	// 		case days >= 1:
	// 			cost = cost + product.day;
	// 			days = days - 1;

	// 			break;
	// 		default:
	// 			break;
	// 	}
	// } while (days !== 0);

	console.log('rentalDates' + JSON.stringify(rentalDates, null, 2));
	console.log('product' + JSON.stringify(product, null, 2));
	return cost;
}
