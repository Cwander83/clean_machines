import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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
				{products.length === 0 ? (
					<h2>empty</h2>
				) : (
					<Grid container spacing={2}>
						<Grid item xs={12}></Grid>
						{products.map((product, i) => {
							return (
								<Grid item key={i}>
									<Typography variant="h6">{product.model}</Typography>
									<Typography variant="body1">Type: {product.type}</Typography>
									{product.start_date ? (
										<Typography variant="body1">
											Type: {product.start_date}
										</Typography>
									) : (
										<></>
									)}
									{product.end_date ? (
										<Typography variant="body1">
											Type: {product.end_date}
										</Typography>
									) : (
										<></>
									)}
									{product.quantity ? (
										<Typography variant="body1">
											Quantity: {product.quantity}
										</Typography>
									) : (
										<></>
									)}
									{product.total ? (
										<Typography variant="body1">
											Total: {product.total}
										</Typography>
									) : (
										<></>
									)}
								</Grid>
							);
						})}
					</Grid>
				)}
			</Paper>
			<Checkout />
		</div>
	);
};

export default Cart;
