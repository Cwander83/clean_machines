import React, { useContext, memo, useState, useEffect } from 'react';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';

// components
import Checkout from '../../components/Checkout/Checkout';
import RentalsList from './RentalsList';
import PurchasesList from './PurchasesList';
import Container from '../../containers/Container';
import DialogRemove from '../../components/Dialogs/DialogRemove';
import PageHeader from '../../components/PageHeader';

// utils
import { totalFunc } from '../../utils/cart';

// context api
import { CartContext } from '../../context/cart-context';

const useStyles = makeStyles((theme) => ({
	root: { minHeight: 'calc(100vh-108px)' },
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
	textField: {
		width: '60px',
		marginRight: '25%',
	},
	gridContainer: {
		marginTop: '20px',
	},
}));

const Cart = () => {
	const classes = useStyles();

	const { cart, setTotals } = useContext(CartContext);

	const [subTotal, setSubTotal] = useState(0);
	const [total, setTotal] = useState(0);
	const [totalTax, setTotalTax] = useState(0);
	const [totalShipping, setShipping] = useState(0);
	const [open, setOpen] = useState(false);
	const [item, setProduct] = useState(null);

	useEffect(() => {
		async function calculateTax() {
			const response = totalFunc(cart);

			setSubTotal(response.subTotal);
			setTotal(response.total);
			setTotalTax(response.taxAmount);
			setShipping(response.shipping);
			setTotals(response);
		}

		calculateTax();
	}, [cart, setTotals]);

	const handleClickOpen = () => {
		// remove dialog
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Container>
			<PageHeader title="Your Shopping Cart" />

			<Grid container spacing={2} className={classes.gridContainer}>
				<RentalsList
					cart={cart}
					classes={classes}
					setProduct={setProduct}
					handleClickOpen={handleClickOpen}
				/>

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
						<Divider variant="middle" />
						<PurchasesList
							cart={cart}
							classes={classes}
							setProduct={setProduct}
							handleClickOpen={handleClickOpen}
						/>
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
					<Grid item xs={12}>
						<Checkout />
					</Grid>
				</Grid>
				<Grid item sm={3}></Grid>
			</Grid>

			{item !== null && (
				<DialogRemove open={open} handleClose={handleClose} item={item} />
			)}
		</Container>
	);
};

export default memo(Cart);
