import React, { useContext, useState } from 'react';

import moment from 'moment';

// axios
// import axios from 'axios'

// classnames
//import ClassNames from 'classnames';

// material ui
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DatePicker } from '@material-ui/pickers/';
import TextField from '@material-ui/core/TextField';

// context api
import { CartContext } from '../../context/cart-context';

// components
import Loading from '../../UI/Loading';

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
}));

const RentalButton = ({ product }) => {
	const classes = useStyles();

	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [rentalDates, setRentalDates] = useState({
		days: 1,
		startDate: null,
		endDate: null,
	});

	console.log('rentalDates: ' + JSON.stringify(rentalDates, null, 2));

	// sets # of days and changes end date to new end date
	const setDaysHandler = (e) => {
		let days = e.target.value;

		let newEndDate = moment(rentalDates.startDate).add(days, 'days');

		setRentalDates({
			...rentalDates,
			endDate: newEndDate,
			[e.target.name]: days,
		});
	};

	let { addToCart } = useContext(CartContext);

	// open and close dialog
	const handleClickOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	// set start date
	const startDateHandler = (date) => {
		let newEndDate = moment(date).add(1, 'days');

		setRentalDates({
			...rentalDates,
			startDate: moment(date).format(),
			endDate: moment(newEndDate).format(),
		});
	};
	const addToCartHandler = () => {
		setLoading(true);
		// sends data to cart context
		// let data = {
		// 	productId: product.id,
		// 	model: product.model,
		// 	price: product.sale_price,
		// 	quantity: 1,

		// 	start_date: rentalDates.startDate,
		// 	end_date: rentalDates.endDate,
		// 	category: product.category,
		// 	units: product.units,
		// 	// TODO update shipping on sales items
		// 	//shipping: product.shipping,
		// 	type: 'rental',
		// };

		// addToCart({ data });
	};
	return (
		<>
			<Button
				onClick={handleClickOpen}
				variant="contained"
				className={classes.button}
			>
				Rent now
				<AddShoppingCartIcon />
			</Button>
			<Dialog open={open} onClose={handleClose} aria-labelledby="dialog-title">
				<DialogTitle id="dialog-title">
					{'Rental Dates for ' + product.model}
				</DialogTitle>
				<DialogContent>
					{!loading ? (
						<>
							<DatePicker
								className={classes.textField}
								label="Start date"
								variant="inline"
								autoOk
								value={rentalDates.startDate}
								animateYearScrolling
								onChange={startDateHandler}
								placeholder="MM/DD/YYYY"
								format="MM/dd/yyyy"
								disablePast="true"
							/>
							<TextField
								label="# of days"
								type="number"
								name="days"
								value={rentalDates.days}
								onChange={setDaysHandler}
								InputLabelProps={{
									shrink: true,
								}}
							/>
							{rentalDates.startDate && (
								<>
									<Typography variant="body1">
										Start Date:{' '}
										{moment(rentalDates.startDate).format('YYYY-MM-DD')}
									</Typography>
									<Typography variant="body1">
										End Date: {moment(rentalDates.endDate).format('YYYY-MM-DD')}
									</Typography>
								</>
							)}
						</>
					) : (
						<Loading />
					)}
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Disagree
					</Button>
					<Button onClick={addToCartHandler} color="primary" autoFocus>
						Agree
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default RentalButton;
