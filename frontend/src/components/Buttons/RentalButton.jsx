import React, { useContext, useState } from 'react';

import moment from 'moment';

// react forms
//import { useForm } from 'react-hook-form';

// axios
// import axios from 'axios'

// classnames
//import ClassNames from 'classnames';

// material ui
import { makeStyles, Typography } from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers/';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Grid from '@material-ui/core/Grid';

// context api
import { CartContext } from '../../context/cart-context';

// helper functions
import { rentalCost } from '../../utils/rental';

// components
//import Loading from '../../UI/Loading';

const useStyles = makeStyles((theme) => ({
	root: {
		margin: '10px 0',
	},
	button: {
		//padding: '0 50px',
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
	error: {
		color: 'red',
	},
	success: {
		color: theme.palette.primary.light,
		textAlign: 'center',
		fontSize: '16px',
	},
}));

const RentalButton = ({ product }) => {
	const classes = useStyles();

	const [error, setErrors] = useState(null);
	const [success, setSuccess] = useState(false);
	//const [cost, setCost] = useState(null);

	const [rentalDates, setRentalDates] = useState({
		//days: 1,
		startDate: null,
		endDate: null,
	});

	console.log('rentalDates: ' + JSON.stringify(rentalDates, null, 2));

	let { addToCart } = useContext(CartContext);

	const addToCartHandler = () => {
		setErrors();
		// sends data to cart context
		if (rentalDates.startDate === null || rentalDates.endDate === null)
			setErrors('not valid dates');
		if (rentalDates.startDate > rentalDates.endDate)
			setErrors("Sorry, rentals can't go in the past");

		const total = rentalCost({ product, rentalDates });
		if (!error) {
			console.log('total' + total);
			let data = {
				productId: product.id,
				model: product.model,
				price: total,
				quantity: 1,

				start_date: moment(rentalDates.startDate).format('YYYY-MM-DD'),
				end_date: moment(rentalDates.endDate).format('YYYY-MM-DD'),
				category: product.category,
				units: product.units,

				type: 'rental',
			};
			addToCart({ data });
			setSuccess(true);
		}
	};
	return (
		<Grid
			container
			spacing={2}
			justify="space-between"
			className={classes.root}
		>
			<DatePicker
				className={classes.textField}
				label="Start date"
				variant="inline"
				name="start_date"
				autoOk
				value={rentalDates.startDate}
				animateYearScrolling
				onChange={(date) =>
					setRentalDates({
						...rentalDates,
						startDate: moment(date).format(),
					})
				}
				placeholder="MM/DD/YYYY"
				format="MM/dd/yyyy"
				disablePast="true"
				required
			/>

			<DatePicker
				className={classes.textField}
				label="End date"
				variant="inline"
				name="end_date"
				autoOk
				value={rentalDates.endDate}
				animateYearScrolling
				onChange={(date) =>
					setRentalDates({
						...rentalDates,
						endDate: moment(date).format(),
					})
				}
				placeholder="MM/DD/YYYY"
				format="MM/dd/yyyy"
				disablePast="true"
				required
				onError={console.log}
			/>
			<Button
				variant="contained"
				className={classes.button}
				onClick={addToCartHandler}
			>
				Add Rental
				<AddShoppingCartIcon className={classes.cartIcon} />
			</Button>

			{error && (
				<Typography className={classes.error} variant="caption">
					{error}
				</Typography>
			)}
			{success && (
				<Typography className={classes.success} variant="caption">
					** Rental added to cart
				</Typography>
			)}
		</Grid>
	);
};

export default RentalButton;
