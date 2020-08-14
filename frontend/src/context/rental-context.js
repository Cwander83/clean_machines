import React from 'react';
import moment from 'moment';

// store default value
export const RentalContext = React.createContext({
	rentalDates: {},
	availableProducts: [],
	startDateHandler: () => {},
	endDateHandler: () => {},
	getAvailableRentals: () => {},
});

// Provider
const RentalContextProvider = (props) => {
	const [rentalDates, setRentalDates] = React.useState({
		days: 1,
		startDate: null,
		endDate: null,
	});
	const [availableProducts, setAvailableProducts] = React.useState([]);

	const getAvailableRentals = () => {
		let start = moment(rentalDates.startDate).format('YYYY-MM-DD');
		let end = moment(rentalDates.endDate).format('YYYY-MM-DD');
		console.log(start, end);
		fetch(`/products/available-rent/${start}/${end}`)
			.then((response) => response.json())
			.then((data) => {
				//console.log(data);
				setAvailableProducts(data);
			})
			.catch((err) => console.error(err));
	};

	const setDays = (endDate) => {
		let a = moment(endDate);
		let b = moment(rentalDates.startDate);
		let c = a.diff(b, 'days');
		return c;
	};

	const startDateHandler = (date) => {
		//let time = setTime(date, true);
		let newEnd = moment(date).add(1, 'days');
		//newEnd = setTime(newEnd, false);
		//let end = setTime(newEnd)
		setRentalDates({
			...rentalDates,
			startDate: moment(date).format(),
			endDate: moment(newEnd).format(),
			show: true,
		});
	};

	// remove a product
	const endDateHandler = (date) => {
		//let time = setTime(date, false);
		// set var index to first index of item to be deleted
		let endDate = moment(date).format();
		let days = setDays(endDate);

		setRentalDates({ ...rentalDates, endDate: endDate, days: days });
	};

	return (
		<RentalContext.Provider
			value={{
				startDateHandler,
				endDateHandler,
				rentalDates,
				availableProducts,
				getAvailableRentals,
				
			}}
		>
			{props.children}
		</RentalContext.Provider>
	);
};

export default RentalContextProvider;

// consumer
export const RentalConsumer = RentalContext.Consumer;
