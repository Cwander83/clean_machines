import React from 'react';

export const CartContext = React.createContext();

const CartProvider = (props) => {
	const [user, setUser] = React.useState({});
	const [products, setProducts] = React.useState([]);

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	console.log(user);

	const updateUserHandler = (data) => setUser(data);

	const updateDeliveryUserHandler = (data) =>
		setUser({ ...user, delivery: data });

	const updateShippingUserHandler = (data) =>
		setUser({ ...user, rental: data });

	const updateProductsHandler = ({ data }) => setProducts([...products, data]);

	//	console.log(products);

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
