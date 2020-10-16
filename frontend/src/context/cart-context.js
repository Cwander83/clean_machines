import React from 'react';

export const CartContext = React.createContext();

const CartProvider = (props) => {
	const [user, setUser] = React.useState({});
	const [cart, setCart] = React.useState([
		{
			productId: 2,
			model: 'model name',
			price: 2000,
			quantity: 1,
			units: 3,
			type: 'sale',
			shipping: 3000,
			category: 'upright',
		},
		{
			productId: 2,
			model: 'model name',
			price: 2000,
			quantity: 1,

			start_date: '2020-01-02',
			end_date: '2020-02-01',
			category: 'cleaning formula',
			type: 'rental',
			shipping: 0,
		},

		{
			productId: 2,
			model: 'model name',
			price: 2000,
			quantity: 1,
			type: 'sale',
			units: 5,
			shipping: 3000,
			category: 'upright',
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

	const updateCartHandler = ({ data }) => {
		console.log(data);

		if (cart === []) setCart([...cart, data]);
		if (cart.length !== 0) {
			cart.findIndex((obj) => obj.productId === data.productId);
			setCart({ ...cart, [cart.quantity]: data.quantity });
		}
	};

	console.log('cart' + JSON.stringify(cart, null, 2));
	return (
		<CartContext.Provider
			value={{
				user,
				setCart,
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
