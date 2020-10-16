import React, { useContext, memo, useState, useEffect } from 'react';

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
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

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
	listItemText: {
		marginLeft: '15px',
	},
	deleteIcon: {},
	modelName: {
		fontSize: '18px',
	},
	secondary: {
		fontWeight: 700,
	},
	removeIcon: {
		marginRight: '25%',
	},
}));

function totalFunc(cart) {
	const tax = 0.07;
	let shipping = 0;
	let total = 0;
	let subTotal = 0;
	let taxAmount = 0;

	cart.forEach((product) => {
		let newPrice = product.quantity * product.price;

		let newShipping = product.quantity * product.shipping;

		subTotal = newPrice + subTotal;

		shipping = shipping + newShipping;
	});

	total = (subTotal / 100).toFixed(2);

	shipping = (shipping / 100).toFixed(2);


	taxAmount = (total * tax).toFixed(2);


	total = (
		parseFloat(total) +
		parseFloat(taxAmount) +
		parseFloat(shipping)
	).toFixed(2);


	return {
		shipping,
		subTotal: (subTotal / 100).toFixed(2),
		total,
		taxAmount: parseFloat(taxAmount).toFixed(2),
	};
}

const Cart = () => {
	const classes = useStyles();

	const { cart,
		 //updateCart
		 } = useContext(CartContext);
	const [subTotal, setSubTotal] = useState(0);
	const [total, setTotal] = useState(0);
	const [totalTax, setTotalTax] = useState(0);
	const [totalShipping, setShipping] = useState(0);

	useEffect(() => {
		async function calculateTax() {
			const response = totalFunc(cart);

			setSubTotal(response.subTotal);
			setTotal(response.total);
			setTotalTax(response.taxAmount);
			setShipping(response.shipping);
		}

		calculateTax();
	}, [cart]);
	console.log(cart)
	const quantityHandler = (e) => {
		console.log(e);
	};

	return (
		<Container maxWidth="lg" className={classes.root}>
			<h1>Your Shopping Cart</h1>

			<Grid container spacing={2} component={Paper}>
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
											'rental period: ' +
											product.start_date +
											' to ' +
											product.end_date
										}
									/>
									<Typography variant="body2">
										{(product.price / 100).toFixed(2)}
									</Typography>
								</ListItem>
							))}
					</List>
				</Grid>
				<Grid item sm={3}></Grid>

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
									<IconButton
										size="small"
										aria-label="delete"
										className={classes.deleteIcon}
									>
										<DeleteOutlineOutlinedIcon />
									</IconButton>

									<ListItemText
										className={classes.listItemText}
										primary={product.model}
										classes={{
											primary: classes.modelName,
											secondary: classes.secondary,
										}}
										secondary={'category: ' + product.category}
									/>
									<IconButton>
										<AddIcon />
									</IconButton>
									<TextField
									size="small"
									margin="none"
									value={product.quantity}
									onChange={(event)=> quantityHandler(event.target.value)}
									type="number" variant="outlined" />

									<IconButton className={classes.removeIcon}>
										<RemoveIcon />
									</IconButton>

									<Typography variant="body2">
										{(product.price / 100).toFixed(2)}
									</Typography>
								</ListItem>
							))}

						<ListItem className={classes.listItem}>
							<ListItemText
								primary="Sub Total"
								className={classes.totalTitle}
							/>
							<Typography variant="subtitle1" className={classes.total}>
								$ {subTotal}
							</Typography>
						</ListItem>
						<ListItem className={classes.listItem}>
							<ListItemText primary="Shipping" className={classes.totalTitle} />
							<Typography variant="subtitle1" className={classes.total}>
								$ {totalShipping}
							</Typography>
						</ListItem>
						<ListItem className={classes.listItem}>
							<ListItemText primary="Tax" className={classes.totalTitle} />
							<Typography variant="subtitle1" className={classes.total}>
								$ {totalTax}
							</Typography>
						</ListItem>
						<ListItem className={classes.listItem}>
							<ListItemText primary="Total" className={classes.totalTitle} />
							<Typography variant="subtitle1" className={classes.total}>
								$ {total}
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
