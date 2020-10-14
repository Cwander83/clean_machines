import React from 'react';

export const CartContext = React.createContext();

const CartProvider = (props) => {
	const [user, setUser] = React.useState({});
	const [cart, setCart] = React.useState([
		{
			type: 'rental',
			model: 'AG1000',
			productId: 1,
			total: 2000,
			start_date: '2020-09-09',
			end_date: '2020-09-15',
		},
		{
			productId: 2,
			model: 'model name',
			price: 300000,
			quantity: 3,
			type: 'sale',
		},
		{
			type: 'rental',
			model: 'AG1000',
			productId: 1,
			total: 2000,
			start_date: '2020-09-09',
			end_date: '2020-09-15',
		},
		{
			productId: 2,
			model: 'model name',
			price: 300000,
			quantity: 3,
			type: 'sale',
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

	const updateCartHandler = ({ data }) => setCart([...cart, data]);

	//console.log('PRODUCTS: ' + JSON.stringify(products, null, 2));

	return (
		<CartContext.Provider
			value={{
				user,
				updateUser: updateUserHandler,
				updateDelivery: updateDeliveryUserHandler,
				updateShipping: updateShippingUserHandler,
				updateCart: updateCartHandler,
				cart,
				open,
				handleClickOpen,
				handleClose,
			}}
		>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
