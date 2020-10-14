import React, { useContext, memo } from 'react';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';

// components
import Checkout from '../../components/Checkout/Checkout';

// context api
import { CartContext } from '../../context/cart-context';

const useStyles = makeStyles((theme) => ({
	root: {},
	listItem: {
		padding: theme.spacing(1, 0),
	},
	total: {
		fontWeight: 700,
	},
	title: {
		marginTop: theme.spacing(2),
		textAlign: 'center',
	},
	subHeader: {
		textAlign: 'left',
		fontSize: '20px',
		color: 'black',
	},
	totalTitle: {
		textAlign: 'center',
	},
}));

function totalFunc(cart) {
	let tax = 0.07;
	let total = 0;
	let newTax = 0;
	console.log(cart);
	cart.forEach((product) => {
		let newPrice = product.quantity * product.price;
		console.log(newPrice);
		total = newPrice + total;
	});

	total = (total / 100).toFixed(2);
	newTax = (total * tax).toFixed(2);

	console.log('total' + total);
	//console.log('totalWithTax' + totalWithTax);

	total = total + newTax;
	return parseInt(total) + parseInt(newTax);
}

const Cart = () => {
	const classes = useStyles();

	const { cart } = useContext(CartContext);

	return (
		<Container maxWidth="lg" className={classes.root}>
			<h1>Your Shopping Cart</h1>

			<Grid container spacing={2} component={Paper}>
				{/* {cart.filter((order) => order.type === 'rental') === 0 ? (
					<></>
				) : (
					<>
						<Grid item sm={3}></Grid>
						<Grid item xs={12} sm={6}>
							<List
								disablePadding
								aria-labelledby="subheader"
								subheader={
									<ListSubheader
										inset
										component="div"
										id="subheader"
										className={classes.subHeader}
									>
										Rental
									</ListSubheader>
								}
							>
								{cart
									.filter((order) => order.type === 'rental')
									.map((product, i) => (
										<ListItem divider className={classes.listItem} key={i}>
											<ListItemText
												primary={product.model}
												secondary={
													'rental dates: ' +
													product.start_date +
													' - ' +
													product.end_date
												}
											/>
											<Typography variant="body2">{product.price}</Typography>
										</ListItem>
									))}
								<ListItem className={classes.listItem}>
									<ListItemText primary="Total" />
									<Typography variant="subtitle1" className={classes.total}>
										$34.06
									</Typography>
								</ListItem>
							</List>
						</Grid>
						<Grid item sm={3}></Grid>
					</>
				)} */}
				<Grid item sm={3}></Grid>
				<Grid item xs={12} sm={6}>
					<List
						disablePadding
						aria-labelledby="subheader"
						subheader={
							<ListSubheader
								inset
								component="div"
								id="subheader"
								className={classes.subHeader}
							>
								Purchases
							</ListSubheader>
						}
					>
						{cart
							.filter((order) => order.type === 'sale')
							.map((product, i) => (
								<ListItem divider className={classes.listItem} key={i}>
									<ListItemText
										primary={product.model}
										secondary={product.total}
									/>
									<Typography variant="body2">{product.price}</Typography>
								</ListItem>
							))}
						<ListItem className={classes.listItem}>
							<ListItemText primary="sub total" className={classes.totalTitle} />
							<Typography variant="subtitle1" className={classes.total}>
								{totalFunc(cart)}
							</Typography>
						</ListItem>
						<ListItem className={classes.listItem}>
							<ListItemText primary="Total" className={classes.totalTitle} />
							<Typography variant="subtitle1" className={classes.total}>
								{totalFunc(cart)}
							</Typography>
						</ListItem>
					</List>
				</Grid>
				<Grid item sm={3}></Grid>
				<Grid item xs={12}>
					<Checkout />
				</Grid>
			</Grid>
		</Container>
	);
};

export default memo(Cart);
