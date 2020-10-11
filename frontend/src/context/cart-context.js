import React from 'react';

export const CartContext = React.createContext();

const CartProvider = (props) => {
	const [user, setUser] = React.useState({});
	const [products, setProducts] = React.useState([
		{
			type: 'rental',
			model: 'AG1000',
			productId: 1,
			total: 2000,
			start_date: '2020-09-09',
			end_date: '2020-09-15',
		},
		
	
	]);

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	//console.log('USER: ' + JSON.stringify(user, null, 2));

	const updateUserHandler = (data) => setUser(data);

	const updateDeliveryUserHandler = (data) =>
		setUser({ ...user, delivery: data });

	const updateShippingUserHandler = (data) =>
		setUser({ ...user, shipping: data });

	const updateProductsHandler = ({ data }) => setProducts([...products, data]);

	//console.log('PRODUCTS: ' + JSON.stringify(products, null, 2));

	return (
		<CartContext.Provider
			value={{
				user: user,
				updateUser: updateUserHandler,
				updateDelivery: updateDeliveryUserHandler,
				updateShipping: updateShippingUserHandler,
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
