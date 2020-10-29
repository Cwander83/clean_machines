import React, { useState } from 'react';
import moment from 'moment';

// store default value
export const RentalContext = React.createContext({});

// Provider
const RentalContextProvider = (props) => {
	const [rentalDates, setRentalDates] = useState({
		startDate: null,
		endDate: null,
	});

	const startDateHandler = (date) =>
		setRentalDates({
			...rentalDates,
			startDate: moment(date).format(),
		});

	// remove a product
	const endDateHandler = (date) =>
		setRentalDates({ ...rentalDates, endDate: moment(date).format() });

	// location dialog in rentals page
	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<RentalContext.Provider
			value={{
				open,
				handleClose,
				startDateHandler,
				endDateHandler,
				rentalDates,
				//availableProducts,
				//	getAvailableRentals,
			}}
		>
			{props.children}
		</RentalContext.Provider>
	);
};

export default RentalContextProvider;

// consumer
export const RentalConsumer = RentalContext.Consumer;
