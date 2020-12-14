import React, { useState, useEffect } from 'react';

// utils
import { totalFunc, totalNoShippingFunc } from '../utils/cart';

export const CartContext = React.createContext();

const CartProvider = (props) => {
	const [user, setUser] = useState({
		billing_name: 'Christopher Wander',
		billing_email: 'weaze1234@hotmail.com',
		billing_phone: '6145065435',
		billing_line1: '26 JAPONICA DR',
		billing_line2: '',
		billing_city: 'ORLANDO',
		billing_postal_code: '32807',
		billing_state: 'FL',
	});
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
		// {
		// 	productId: 2,
		// 	model: 'test',
		// 	price: 20030,
		// 	quantity: 1,
		// 	category: 'backpack',
		// 	shipping: 3000,
		// 	type: 'sale',
		// },
	]);

	console.log('*** user Data : ' + JSON.stringify(user, null, 2));

	const [totals, setTotals] = useState({});

	const [checked, setChecked] = useState(false);

	const [open, setOpen] = useState(false);

	const handleClickOpen = () => setOpen(true);

	const handleClose = () => setOpen(false);

	const updateShippingUserHandler = (data) =>
		setUser({ ...user, shipping: data });

	const addToCartHandler = ({ data }) => {
		setCart([...cart, data]);
	};
	const removeFromCartHandler = (item) => {
		const newCart = cart.filter((obj) => obj !== item);
		setCart(newCart);
	};

	useEffect(() => {
		let newTotal = 0;
		if (checked) {
			newTotal = totalNoShippingFunc(cart);
			setTotals(newTotal);
		}
		if (!checked) {
			newTotal = totalFunc(cart);
			setTotals(newTotal);
		}
	}, [checked, cart]);

	const handleChange = (event) => setChecked(event.target.checked);

	return (
		<CartContext.Provider
			value={{
				user,
				setUser,
				setCart,
				updateShipping: updateShippingUserHandler,
				addToCart: addToCartHandler,
				removeFromCart: removeFromCartHandler,
				cart,
				open,
				handleClickOpen,
				handleClose,
				totals,
				setTotals,
				checked,
				handleChange,
			}}
		>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
