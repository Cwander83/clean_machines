
export function rentalCost({ product, rentalDates }) {
	let cost = 0;
	let days = 0;
	let start = new Date(rentalDates.startDate);
	let end = new Date(rentalDates.endDate);

	let differenceInTime = end.getTime() - start.getTime();

	days = differenceInTime / (1000 * 3600 * 24);


	do {
		switch (true) {
			case days >= 7:
				cost = cost + parseInt(product.rental_week);
				days = days - 7;
				break;

			case days >= 2:
				cost = cost + parseInt(product.rental_two_day);
				days = days - 2;

				break;
			case days >= 1:
				cost = cost + parseInt(product.rental_day);
				days = days - 1;

				break;
			default:
				break;
		}
	} while (days !== 0);

	return cost;
}
