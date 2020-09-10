import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
//import Grid from '@material-ui/core/Grid';
import Checkout from '../../components/Checkout/Checkout';
import { CartContext } from '../../context/cart-context';

const useStyles = makeStyles((theme) => ({
	root: {},
}));

const Cart = () => {
	const classes = useStyles();

	const { products } = React.useContext(CartContext);

	return (
		<div className={classes.root}>
			<h1>Your cart</h1>
			<Paper>
				{products.length === 0 ? <h2>empty</h2> : <h2>not empty</h2>}
			</Paper>
			<Checkout />
		</div>
	);
};

export default Cart;
