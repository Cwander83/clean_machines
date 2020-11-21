import React, { useContext, useState, memo } from 'react';

import moment from 'moment';

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

const useStyles = makeStyles((theme) => ({
	root: {
		flexDirection: 'row',
		margin: '10px 0',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
		},
	},
	button: {
		color: theme.palette.grey.main,
		backgroundColor: theme.palette.primary.light,
		marginTop: '10px',
		'&:active, &:hover': {
			backgroundColor: theme.palette.primary.dark,
		},
	},
	textField: {
		margin: '0 10px 10px 10px',
	},

	icon: {
		fontSize: '34px',
		margin: 'auto 5px',
		backgroundColor: theme.palette.primary.light,
		color: theme.palette.gold.main,
		cursor: 'pointer',
	},
	cartIcon: {
		fontSize: '20px',
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

	const [rentalDates, setRentalDates] = useState({
		startDate: null,
		endDate: null,
	});

	let { addToCart } = useContext(CartContext);

	const addToCartHandler = () => {
		setErrors();

		// sends data to cart context
		if (rentalDates.startDate === null || rentalDates.endDate === null) {
			setErrors('not valid dates');
			console.error('valid dates error');
		} else if (rentalDates.startDate > rentalDates.endDate) {
			setErrors("Sorry, rentals can't go in the past");
			console.error('past error');
		} else if (!error) {
			console.log('i see this here');
			const total = rentalCost({ product, rentalDates });
			let data = {
				productId: product.id,
				model: product.model,
				price: total,
				quantity: 1,
				start_date: moment(rentalDates.startDate).format('YYYY-MM-DD'),
				end_date: moment(rentalDates.endDate).format('YYYY-MM-DD'),
				category: product.category,
				type: 'rental',
				shipping: 0,
			};

			addToCart({ data });

			setSuccess(true);
		}
	};
	return (
		<Grid container spacing={2} justify="center" className={classes.root}>
			<Grid item>
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
			</Grid>
			<Grid item>
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
			</Grid>
			<Grid item>
				{success ? (
					<Typography className={classes.success} variant="caption">
						** Rental added to cart
					</Typography>
				) : (
					<Button
						variant="contained"
						className={classes.button}
						onClick={addToCartHandler}
					>
						Add Rental
						<AddShoppingCartIcon className={classes.cartIcon} />
					</Button>
				)}
			</Grid>

			{error && (
				<Typography className={classes.error} variant="caption">
					{error}
				</Typography>
			)}
		</Grid>
	);
};

export default memo(RentalButton);
