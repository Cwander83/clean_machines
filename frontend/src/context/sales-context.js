import React from 'react';

// store default value
export const SalesContext = React.createContext({
	availableProducts: [],
	outOfStock: [],
	getAvailableProducts: () => {},
});

// Provider
const SalesContextProvider = (props) => {
	const [availableProducts, setAvailableProducts] = React.useState([]);
	const [outOfStock, setOutOfStock] = React.useState([]);

	const getAvailableProducts = React.useCallback(() => {
		fetch(`/products/sale`)
			.then((response) => response.json())
			.then((data) => {
				//console.log(data);
				setAvailableProducts(data);
			})
			.catch((err) => console.error(err));
	}, []);
	const getOutOfStock = React.useCallback(() => {
		fetch(`/products/out`)
			.then((response) => response.json())
			.then((data) => {
				//console.log(data);
				setOutOfStock(data);
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<SalesContext.Provider
			value={{
				availableProducts,
				outOfStock,
				getAvailableProducts,
				getOutOfStock,
			}}
		>
			{props.children}
		</SalesContext.Provider>
	);
};

export default SalesContextProvider;

// consumer
export const RentalConsumer = SalesContext.Consumer;
