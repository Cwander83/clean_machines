import React, { useContext, useState } from 'react';

// material ui
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import icon1 from '../../assets/CCLOGOS/1.png';
import icon2 from '../../assets/CCLOGOS/2.png';
import icon3 from '../../assets/CCLOGOS/14.png';
import icon4 from '../../assets/CCLOGOS/22.png';

// stripe elements
import {
	CardNumberElement,
	CardExpiryElement,
	CardCvcElement,
	useStripe,
	useElements,
} from '@stripe/react-stripe-js';

// context api
import { CartContext } from '../../context/cart-context';

const useStyles = makeStyles((theme) => ({
	form: {
		width: '100%',
	},
	stripe: {
		padding: theme.spacing(2),
		borderBottom: '1px solid grey',
	},
	buttons: {
		marginTop: '20px',
		display: 'flex',
		justifyContent: 'flex-end',
	},
	buttonPrev: {
		marginRight: '10px',
	},
	iconList: {
		display: 'flex',
		justifyContent: 'center',
		listStyleType: 'none',
	},
	icon: {
		width: '50px',
		margin: '0 5px',
	},
	title: {
		padding: theme.spacing(2),
		letterSpacing: '.035em',
		textTransform: 'uppercase',
		color: theme.palette.gold.main,
		backgroundColor: theme.palette.primary.light,
	},
}));

export default function PaymentForm({ prevStep, nextStep }) {
	const { cart, user, totals, setUser, setCart, setTotals } = useContext(
		CartContext
	);
	const classes = useStyles();

	const [errors, setErrors] = useState(null);
	const [success, setSuccess] = useState(null);

	const stripe = useStripe();
	const elements = useElements();

	console.log(JSON.stringify([cart, user, totals], null, 2));

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js has not loaded yet. Make sure to disable
			// form submission until Stripe.js has loaded.
			return;
		}

		const payload = await stripe.createPaymentMethod({
			type: 'card',
			card: elements.getElement(CardNumberElement),
		});
		console.log('[PaymentMethod]', payload);
		handlePaymentMethodResult(payload);
	};

	const handlePaymentMethodResult = async (result) => {
		console.log('hit');
		console.log('results: ' + JSON.stringify(result, null, 2));
		console.log('cart: ' + JSON.stringify(cart, null, 2));
		if (result.error) {
			// An error happened when collecting card details,
			// show `result.error.message` in the payment form.
			console.log('result error ' + JSON.stringify(result.error, null, 2));
			setErrors(result.error.message);
		} else {
			// Otherwise send paymentMethod.id to your server (see Step 3)
			const response = await fetch('/customers/pay', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					payment_method_id: result.paymentMethod.id,
					userData: user,
					productData: cart,
					totals: totals,
				}),
			});

			const serverResponse = await response.json();
			console.log(
				'server response: ' + JSON.stringify(serverResponse, null, 2)
			);
			handleServerResponse(serverResponse);
		}
	};

	const handleServerResponse = (serverResponse) => {
		if (serverResponse.error) {
			// An error happened when charging the card,
			// show the error in the payment form.
			console.log(
				'serverResponse.error ' + JSON.stringify(serverResponse.error, null, 2)
			);
			setErrors(serverResponse.error.message);
		} else {
			// Show a success message
			setSuccess('payment sent');
			setUser({});
			setCart([]);
			setTotals({});

			// TODO navigate to success page
		}
	};

	return (
		<React.Fragment>
			<Typography className={classes.title} variant="h6" gutterBottom>
				Payment Processing
			</Typography>
			<form noValidate className={classes.form} onSubmit={handleSubmit}>
				<Grid container spacing={3} justify="center">
					<Grid item xs={10}>
						<TextField
							required
							id="cardName"
							label="Name on card"
							fullWidth
							autoComplete="cc-name"
						/>
					</Grid>
					<Grid item xs={10}>
						<CardNumberElement className={classes.stripe} />
					</Grid>
					<Grid item xs={7}>
						<CardExpiryElement className={classes.stripe} />
					</Grid>
					<Grid item xs={3}>
						<CardCvcElement className={classes.stripe} />
					</Grid>
					<Grid item xs={10}>
						<ul className={classes.iconList}>
							<li>
								<img
									src={icon1}
									className={classes.icon}
									alt="clean machines rental"
								/>
							</li>
							<li>
								<img
									src={icon2}
									className={classes.icon}
									alt="clean machines rental"
								/>
							</li>
							<li>
								<img
									src={icon3}
									className={classes.icon}
									alt="clean machines rental"
								/>
							</li>
							<li>
								<img
									src={icon4}
									className={classes.icon}
									alt="clean machines rental"
								/>
							</li>
						</ul>
					</Grid>
					<Grid item xs={10}>
						<Typography variant="h6">{errors ? errors : null}</Typography>
					</Grid>
					<Grid item xs={10}>
						<Typography variant="h6">{success ? success : null}</Typography>
					</Grid>
				</Grid>
				<Grid item xs={12} className={classes.buttons}>
					<Button
						className={classes.buttonPrev}
						color="primary"
						variant="contained"
						type="submit"
						onClick={prevStep}
					>
						back
					</Button>
					<Button
						color="primary"
						variant="contained"
						type="submit"
						onClick={nextStep}
						disabled={!stripe}
					>
						complete purchase
					</Button>
				</Grid>
			</form>
		</React.Fragment>
	);
}

// const user = {
// 	name: 'chris',
// 	email: 'test@abc.com',
// 	phone: 111111111,
// 	amount: 2000,
// 	items: 'AG1000',
// 	city: 'Orlando',
// 	line1: '23 abd st.',
// 	line2: 'po box 22',
// 	country: 'US',
// 	state: 'FL',
// 	postal_code: 32807,
// 	shipping_name: 'tj max',
// 	shipping_companyName: 'tj max',
// 	shipping_phone: '1111111111',
// 	shipping_city: 'Orlando',
// 	shipping_line1: '23 abd st.',
// 	shipping_line2: 'po box 22',
// 	shipping_country: 'US',
// 	shipping_state: 'FL',
// 	shipping_postal_code: 32807,
// 	rental_boolean: true,
// 	sales_boolean: true,
// 	rental: [
// 		{
// 			product_id: 1,
// 			rental_price_day: 5,
// 			rental_days: 20,
// 			rental_start_date: new Date('2020-10-01T14:31:00-04:00'),
// 			rental_end_date: new Date('2020-10-20T14:31:00-04:00'),
// 			deposit: 10,
// 		},
// 		{
// 			product_id: 3,
// 			rental_price_day: 5,
// 			rental_days: 4,
// 			rental_start_date: new Date('2020-10-01T14:31:00-04:00'),
// 			rental_end_date: new Date('2020-10-10T14:31:00-04:00'),
// 			deposit: 3,
// 		},
// 		{
// 			product_id: 5,
// 			rental_price_day: 5,
// 			rental_days: 10,
// 			rental_start_date: new Date('2020-10-05T14:31:00-04:00'),
// 			rental_end_date: new Date('2020-10-25T14:31:00-04:00'),
// 			deposit: 3,
// 		},
// 	],
// 	sales: [
// 		{
// 			product_id: 2,
// 			units: 1,
// 			price_per_unit: 2,
// 		},
// 		{
// 			product_id: 1,
// 			units: 1,
// 			price_per_unit: 2,
// 		},
// 		{
// 			product_id: 2,
// 			units: 3,
// 			price_per_unit: 12,
// 		},
// 		{
// 			product_id: 4,
// 			units: 1,
// 			price_per_unit: 2,
// 		},
// 		{
// 			product_id: 2,
// 			units: 71,
// 			price_per_unit: 102,
// 		},
// 	],
// };
