import React from 'react';

// axios
import axios from 'axios';

// store default value
export const SalesContext = React.createContext();

// Provider
const SalesContextProvider = (props) => {
	const [products, setAvailableProducts] = React.useState([]);

	const getAvailableProducts = React.useCallback(() => {
		axios('/products/')
			.then((results) => {setAvailableProducts(results.data)})
			.catch((err) => console.error(err));
	}, []);
	const findSingleProduct = (id) => {
		return products.find((product) => product.id === id);
	};

	return (
		<SalesContext.Provider
			value={{
				products,
				getAvailableProducts,
				findSingleProduct,
			}}
		>
			{props.children}
		</SalesContext.Provider>
	);
};

export default SalesContextProvider;

// consumer
export const RentalConsumer = SalesContext.Consumer;
