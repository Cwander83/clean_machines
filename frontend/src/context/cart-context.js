import React from 'react';

export const CartContext = React.createContext();

const CartProvider = (props) => {
	const [user, setUser] = React.useState({
		// name: '',
		// email: '',
		// //phone: 111111111,
		// //amount: 2000,
		// //items: 'AG1000',
		// //city: 'Orlando',
		// //line1: '23 abd st.',
		// //line2: 'po box 22',
		// //country: 'US',
		// //state: 'FL',
		// //postal_code: 32807,
		// shipping_name: '',
		// shipping_phone: '',
		// shipping_city: '',
		// shipping_line1: '',
		// shipping_line2: '',
		// shipping_country: '',
		// shipping_state: '',
		// shipping_postal_code: null,
		// //rental_boolean: true,
		// //sales_boolean: true,
	});
	const [products, setProducts] = React.useState([]);
	const [errors, setErrors] = React.useState([]);

	const updateUserHandler = (e) => {
		const value = e.target.value;
		setUser({ ...user, [e.target.name]: value });
	};
	const updateProductsHandler = () => setProducts(true);

	const errorsHandler = (error) => {
		setErrors([...errors, errors.push(error)]);
	};

	const clearErrors = () => setErrors([]);

	console.log(user);

	return (
		<CartContext.Provider
			value={{
				user: user,
				updateUser: updateUserHandler,
				updateProduct: updateProductsHandler,
				products: products,
				errors: errors,
				clearErrors: clearErrors,
				errorsHandler: errorsHandler,
			}}
		>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
