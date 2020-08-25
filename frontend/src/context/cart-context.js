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

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	// const updateUserHandler = (e) => {
	// 	const value = e.target.value;
	// 	setUser({ ...user, [e.target.name]: value });
	// };

	
	const updateUserHandler = (data) => setUser(data);


	const updateProductsHandler = ({ data }) => setProducts([...products, data]);

	console.log(products);

	return (
		<CartContext.Provider
			value={{
				user: user,
				updateUser: updateUserHandler,
				updateProduct: updateProductsHandler,
				products: products,
				open: open,
				handleClickOpen: handleClickOpen,
				handleClose: handleClose,
			}}
		>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
