import React, { useState, useContext, memo } from 'react';

// axios
// import axios from 'axios'

// classnames
import ClassNames from 'classnames';

// material ui
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Paper from '@material-ui/core/Paper';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

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
		color: theme.palette.grey.main,
		backgroundColor: theme.palette.primary.light,
		'&:active, &:hover': {
			backgroundColor: theme.palette.primary.dark,
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
		cursor: 'pointer',
	},
	cartIcon: {
		marginLeft: '5px',
		color: theme.palette.gold.main,
	},
	checkmarkIcon: {
		marginRight: '5px',
		color: theme.palette.primary.light,
		fontSize: '26px',
	}
}));

const AddToCart = ({ product }) => {
	const classes = useStyles();

	const [count, setCount] = useState(1);
	const [success, setSuccess] = useState(false);

	let { addToCart } = useContext(CartContext);

	const increment = () =>
		setCount((prevState) =>
			prevState === product.units ? prevState : prevState + 1
		);

	const decrement = () =>
		setCount((prevState) => (prevState === 1 ? prevState : prevState - 1));

	const addToCartHandler = () => {
		// sends data to cart context
		let data = {
			productId: product.id,
			model: product.model,
			price: product.sale_price,
			quantity: count,
			category: product.category,
			units: product.units,
			// TODO update shipping on sales items
			//shipping: product.shipping,
			type: 'sale',
		};

		addToCart({ data });
		setSuccess(true);
		setCount(1);
	};

	console.log('ADD TO CART ');

	return (
		<div className={classes.root}>
			{!success ? (
				<>
					<AddIcon className={ClassNames(classes.icon)} onClick={increment} />
					<Typography variant="h6" className={classes.count} component={Paper}>
						{count}
					</Typography>
					<RemoveIcon
						className={ClassNames(classes.icon)}
						onClick={decrement}
					/>
					<Button
						variant="contained"
						className={classes.button}
						onClick={addToCartHandler}
					>
						Add to cart
						<AddShoppingCartIcon className={classes.cartIcon} />
					</Button>
				</>
			) : (
				<Typography variant="h5">
					<CheckCircleIcon className={classes.checkmarkIcon}/>
					 Added to Cart!
				</Typography>
			)}
		</div>
	);
};

export default memo(AddToCart);
