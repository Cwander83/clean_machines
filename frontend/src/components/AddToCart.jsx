import React, { useState, useContext, memo } from 'react';

// axios
// import axios from 'axios'

// classnames
import ClassNames from 'classnames';

// material ui
import { makeStyles, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Paper from '@material-ui/core/Paper';

// context api
import { CartContext } from '../context/cart-context';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',

		margin: '10px 0',
	},
	button: {
		marginLeft: '20px',
		padding: '0 50px',
		// paddingLeft: ' 50px',
		// paddingRight: ' 50px',
		color: theme.palette.grey.main,
		backgroundColor: theme.palette.primary.light,
		'&:hover': {
			color: 'black',
		},
	},
	count: {
		border: '1px solid black',
		padding: '0 10px',
		fontSize: '36px',
	},
	icon: {
		fontSize: '34px',
		margin: 'auto 5px',
		backgroundColor: theme.palette.primary.light,
		color: theme.palette.gold.main,
	},
	cartIcon: {
		marginLeft: '5px',
		color: theme.palette.gold.main,
	},
}));

const AddToCart = ({ product }) => {
	const classes = useStyles();

	const [count, setCount] = useState(1);

	let { updateProduct } = useContext(CartContext);

	const increment = () =>
		setCount((prevState) =>
			prevState === product.units ? prevState : prevState + 1
		);

	const decrement = () =>
		setCount((prevState) => (prevState === 1 ? prevState : prevState - 1));

	const addToCart = () => {
		// sends data to cart context
		let data = {
			productId: product.id,
			model: product.model,
			price: product.sale_price,
			quantity: count,
			type: 'sale',
		};
		console.log(data);
		updateProduct({ data });
		setCount(1);
	};

	return (
		<div className={classes.root}>
			<AddIcon className={ClassNames(classes.icon)} onClick={increment} />
			<Typography variant="h6" className={classes.count} component={Paper}>
				{count}
			</Typography>
			<RemoveIcon className={ClassNames(classes.icon)} onClick={decrement} />
			<Button
				variant="contained"
				className={classes.button}
				onClick={addToCart}
			>
				Add to cart
				<AddShoppingCartIcon className={classes.cartIcon} />
			</Button>
		</div>
	);
};

export default memo(AddToCart);
