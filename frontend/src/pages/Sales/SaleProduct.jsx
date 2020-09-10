import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { CartContext } from '../../context/cart-context';
import Dialog from '@material-ui/core/Dialog';

//import picture from '../../images/BGFS5000.jpg';

const useStyles = makeStyles((theme) => ({}));
const SaleProduct = (props) => {
	const classes = useStyles();

	const { updateProduct } = React.useContext(CartContext);

	const [amount, setAmount] = React.useState(1); // inside dialog

	// opens dialog
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		// dialog
		setOpen(true);
	};

	const handleClose = () => {
		// dialog
		setOpen(false);
	};

	const increment = () => {
		// inside dialog
		setAmount((prevState) =>
			prevState === product.units ? prevState : prevState + 1
		);
	};
	const decrement = () => {
		setAmount((prevState) => (prevState === 1 ? prevState : prevState - 1));
	};

	const addToCart = () => {
		// sends data to cart context
		let data = {
			productId: product.id,
			unitPrice: product.sale_price,
			amount: amount,
		};
		console.log(data);
		updateProduct({ data });
	};

	const product = props.location.state.products;

	return (
		<div>
			<Grid item xs={12}>
				<Typography className={classes.title} variant="h6">
					{!product.name ? product.model : product.name}
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography className={classes.title} variant="h6">
					{product.rental === 1 ? 'available to rent' : null}
				</Typography>
			</Grid>

			<Grid item xs={12} className={classes.modelTitle}>
				<Typography
					color="textSecondary"
					variant="h6"
					className={classes.modelText}
				>
					Model
				</Typography>
				<Typography color="textSecondary" className={classes.modelText2}>
					{product.model}
				</Typography>
			</Grid>
			<Grid item xs={12} className={classes.modelTitle}>
				<Typography
					color="textSecondary"
					variant="h6"
					className={classes.modelText}
				>
					# of units available
				</Typography>
				<Typography color="textSecondary" className={classes.modelText2}>
					{product.units}
				</Typography>
			</Grid>
			<Grid item xs={12} className={classes.modelTitle}>
				<Typography
					color="textSecondary"
					variant="h6"
					className={classes.modelText}
				>
					Features
				</Typography>
				<ul className={classes.list}>
					<li className={classes.listItem}>
						<Typography color="textSecondary">
							{product.feature_0 ? product.feature_0 : <></>}
						</Typography>
					</li>
					<li className={classes.listItem}>
						<Typography color="textSecondary">
							{product.feature_1 ? product.feature_1 : <></>}
						</Typography>
					</li>
					<li className={classes.listItem}>
						<Typography color="textSecondary">
							{product.feature_2 ? product.feature_2 : <></>}
						</Typography>
					</li>
					<li className={classes.listItem}>
						<Typography color="textSecondary">
							{product.feature_3 ? product.feature_3 : <></>}
						</Typography>
					</li>
					<li className={classes.listItem}>
						<Typography color="textSecondary">
							{product.feature_4 ? product.feature_4 : <></>}
						</Typography>
					</li>
					<li className={classes.listItem}>
						<Typography color="textSecondary">
							{product.feature_5 ? product.feature_5 : <></>}
						</Typography>
					</li>
					<li className={classes.listItem}>
						<Typography color="textSecondary">
							{product.feature_6 ? product.feature_6 : <></>}
						</Typography>
					</li>
					<li className={classes.listItem}>
						<Typography color="textSecondary">
							{product.feature_7 ? product.feature_7 : <></>}
						</Typography>
					</li>
					<li className={classes.listItem}>
						<Typography color="textSecondary">
							{product.feature_8 ? product.feature_8 : <></>}
						</Typography>
					</li>
					<li className={classes.listItem}>
						<Typography color="textSecondary">
							{product.feature_9 ? product.feature_9 : <></>}
						</Typography>
					</li>
				</ul>
				<Button onClick={handleClickOpen}>add to cart</Button>
			</Grid>
			<Dialog open={open} fullWidth maxWidth="md" onClose={handleClose}>
				<Typography variant="h4">{product.model}</Typography>
				<Typography variant="h4">{product.sale_price}</Typography>
				<Button onClick={decrement}>less</Button>
				<Typography variant="h6">{amount}</Typography>
				<Button onClick={increment}>add</Button>
				<Typography variant="h4">sub total</Typography>
				<Button onClick={addToCart}>add to cart</Button>
			</Dialog>
		</div>
	);
};

export default SaleProduct;
