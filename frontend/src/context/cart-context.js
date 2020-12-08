import React, { useState } from 'react';

export const CartContext = React.createContext();

const CartProvider = (props) => {
	const [user, setUser] = useState({});
	const [cart, setCart] = useState([
	
		// {
		// 	productId: 2,
		// 	model: 'BGU19T',
		// 	price: 2000,
		// 	quantity: 1,
		// 	start_date: '2020-01-02',
		// 	end_date: '2020-02-01',
		// 	category: 'cleaning formula',
		// 	type: 'rental',
		// 	shipping: 0,
		// },
	
		{
			productId: 2,
			model: 'test',
			price: 20030,
			quantity: 1,
			category: 'backpack',
			shipping: 3000,
			type: 'sale',
		},
	]);

	console.log('*** user Data : ' + JSON.stringify(user, null, 2));

	const [totals, setTotals] = useState({});

	const [open, setOpen] = useState(false);

	const handleClickOpen = () => setOpen(true);

	const handleClose = () => setOpen(false);

	const updateDeliveryUserHandler = (data) =>
		setUser({ ...user, delivery: data });

	const updateShippingUserHandler = (data) =>
		setUser({ ...user, shipping: data });

	const addToCartHandler = ({ data }) => {
		setCart([...cart, data]);
	};
	const removeFromCartHandler = (item) => {
		const newCart = cart.filter((obj) => obj !== item);
		setCart(newCart);
	};

	return (
		<CartContext.Provider
			value={{
				user,
				setUser,
				setCart,
				updateDelivery: updateDeliveryUserHandler,
				updateShipping: updateShippingUserHandler,
				addToCart: addToCartHandler,
				removeFromCart: removeFromCartHandler,
				cart,
				open,
				handleClickOpen,
				handleClose,
				totals,
				setTotals,
			}}
		>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
