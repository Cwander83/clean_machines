import React, { useContext, useState } from 'react';

// react hooks form
import { useForm, Controller } from 'react-hook-form';

// utils
import { states } from '../../utils/cart';

// material ui
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
// import icon1 from '../../assets/CCLOGOS/1.png';
// import icon2 from '../../assets/CCLOGOS/2.png';
// import icon3 from '../../assets/CCLOGOS/14.png';
// import icon4 from '../../assets/CCLOGOS/22.png';

// stripe elements
import {
	CardElement,
	//	CardNumberElement,
	//	CardExpiryElement,
	//	CardCvcElement,
	useStripe,
	useElements,
} from '@stripe/react-stripe-js';

// context api
import { CartContext } from '../../context/cart-context';
import { useEffect } from 'react';

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
	/* Buttons and links */

	button: {
		background: theme.palette.primary.light,
		color: ' #ffffff',
		borderRadius: ' 0 0 4px 4px',
		border: 0,
		padding: '12px 16px',
		fontWeight: 600,
		cursor: 'pointer',
		display: 'block',
		transition: 'all 0.2s ease',
		boxShadow: '0px 4px 5.5px 0px rgba(0, 0, 0, 0.07)',
		width: ' 100%',
		'&:hover': {
			filter: 'contrast(115%)',
		},
		'&disabled': {
			opacity: 0.5,
			cursor: 'default',
		},
	},
	span: {
		fontSize: '16px',
		color: 'white',
	},
	cardElement: {
		borderRadius: '4px 4px 0 0',
		padding: '12px',
		border: '1px solid rgba(50, 50, 93, 0.1)',
		maxHeight: '44px',
		width: '100%',
		background: 'white',
		boxSizing: 'border-box',
	},
}));

export default function PaymentForm({ prevStep, nextStep }) {
	const cardStyle = {
		style: {
			base: {
				color: '#000000',

				fontFamily: 'Roboto, sans-serif',

				fontSmoothing: 'antialiased',

				fontSize: '16px',

				'::placeholder': {
					color: '#000000',
				},
			},

			invalid: {
				color: '#fa755a',

				iconColor: '#fa755a',
			},
		},
	};

	const { register, handleSubmit, errors, control } = useForm();

	const {
		cart,
		user,
		totals,
		setUser,
		setCart,
		setTotals,
		updateUser,
	} = useContext(CartContext);

	const classes = useStyles();
	const [processing, setProcessing] = useState('');
	const [error, setError] = useState(null);
	const [succeeded, setSucceeded] = useState(false);
	const [disabled, setDisabled] = useState(true);
	const [clientSecret, setClientSecret] = useState('');
	const stripe = useStripe();
	const elements = useElements();

	console.log(JSON.stringify([cart, user, totals], null, 2));

	useEffect(() => {
		window
			.fetch('/customers/pay', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					//	payment_method_id: result.paymentMethod.id,
					userData: user,
					productData: cart,
					totals: totals,
				}),
			})
			.then((res) => {
				return res.json();
			})

			.then((data) => {
				setClientSecret(data.clientSecret);
			});
	}, []);

	// const handleSubmit = async (event) => {
	// 	event.preventDefault();

	// 	if (!stripe || !elements) {
	// 		// Stripe.js has not loaded yet. Make sure to disable
	// 		// form submission until Stripe.js has loaded.
	// 		return;
	// 	}

	// 	const payload = await stripe.createPaymentMethod({
	// 		type: 'card',
	// 		card: elements.getElement(CardNumberElement),
	// 	});
	// 	console.log('[PaymentMethod]', payload);
	// 	handlePaymentMethodResult(payload);
	// };

	// const handlePaymentMethodResult = async (result) => {
	// 	console.log('hit');
	// 	console.log('results: ' + JSON.stringify(result, null, 2));
	// 	console.log('cart: ' + JSON.stringify(cart, null, 2));
	// 	if (result.error) {
	// 		// An error happened when collecting card details,
	// 		// show `result.error.message` in the payment form.
	// 		console.log('result error ' + JSON.stringify(result.error, null, 2));
	// 		setErrors(result.error.message);
	// 	} else {
	// 		// Otherwise send paymentMethod.id to your server (see Step 3)
	// 		const response = await fetch('/customers/pay', {
	// 			method: 'POST',
	// 			headers: { 'Content-Type': 'application/json' },
	// 			body: JSON.stringify({
	// 				payment_method_id: result.paymentMethod.id,
	// 				userData: user,
	// 				productData: cart,
	// 				totals: totals,
	// 			}),
	// 		});

	// 		const serverResponse = await response.json();
	// 		console.log(
	// 			'server response: ' + JSON.stringify(serverResponse, null, 2)
	// 		);
	// 		handleServerResponse(serverResponse);
	// 	}
	// };

	// const handleServerResponse = (serverResponse) => {
	// 	if (serverResponse.error) {
	// 		// An error happened when charging the card,
	// 		// show the error in the payment form.
	// 		console.log(
	// 			'serverResponse.error ' + JSON.stringify(serverResponse.error, null, 2)
	// 		);
	// 		setErrors(serverResponse.error.message);
	// 	} else {
	// 		// Show a success message
	// 		setSuccess('payment sent');
	// 		setUser({});
	// 		setCart([]);
	// 		setTotals({});

	// 		// TODO navigate to success page
	// 	}
	// };

	return (
		<React.Fragment>
			<Typography className={classes.title} variant="h6" gutterBottom>
				Payment Processing
			</Typography>
			<form
				noValidate
				className={classes.form}
				//onSubmit={handleSubmit}
			>
				<Grid container spacing={3} justify="center">
					<Grid item xs={12} sm={10}>
						<TextField
							required
							id="name"
							name="billing_name"
							label="Name"
							fullWidth
							//	defaultValue={user.billing_name}
							autoComplete="name"
							//	error={!!errors.billing_name}
							//	inputRef={register({ required: true })}
						/>
					</Grid>

					<Grid item xs={12} sm={10}>
						<TextField
							required
							id="email"
							name="billing_email"
							label="Email"
							fullWidth
							autoComplete="email"
							defaultValue={user.billing_email}
							error={!!errors.billing_email}
							inputRef={register({ required: true, pattern: /\S+@\S+\.\S+/ })}
						/>
						<p>{errors.email && 'not valid email'}</p>
					</Grid>
					<Grid item xs={12} sm={10}>
						<TextField
							required
							id="phone"
							name="billing_phone"
							label="Phone Number"
							fullWidth
							autoComplete="phone"
							error={!!errors.billing_phone}
							defaultValue={user.billing_phone}
							inputRef={register({ required: true })}
						/>
					</Grid>
					<Grid item xs={12} sm={10}>
						<TextField
							required
							id="address1"
							name="billing_line1"
							label="Address line 1"
							fullWidth
							defaultValue={user.billing_line1}
							autoComplete="address-line1"
							error={!!errors.billing_line1}
							inputRef={register({ required: true })}
						/>
					</Grid>
					<Grid item xs={12} sm={10}>
						<TextField
							id="address2"
							name="billing_line2"
							label="Address line 2"
							fullWidth
							defaultValue={user.billing_line2}
							autoComplete="address-line2"
							inputRef={register}
						/>
					</Grid>
					<Grid item xs={12} sm={10}>
						<TextField
							required
							id="city"
							name="billing_city"
							label="City"
							fullWidth
							defaultValue={user.billing_city}
							autoComplete="address-level2"
							error={!!errors.billing_city}
							inputRef={register({ required: true })}
						/>
					</Grid>
					<Grid item xs={12} sm={10}>
						<InputLabel id="select-state">State</InputLabel>
						<Controller
							as={
								<Select fullWidth required labelId="select-state">
									{states.map((state) => {
										return (
											<MenuItem key={state} value={state}>
												{state}
											</MenuItem>
										);
									})}
								</Select>
							}
							name="billing_state"
							defaultValue={'FL'}
							control={control}
							inputRef={register}
						/>
					</Grid>
					{/* <Grid item xs={12} sm={10}>
						<TextField
							required
							id="cardName"
							label="Name on card"
							fullWidth
							autoComplete="cc-name"
						/>
					</Grid>
					<Grid item xs={12} sm={10}>
						<CardNumberElement className={classes.stripe} />
					</Grid>
					<Grid item xs={7}>
						<CardExpiryElement className={classes.stripe} />
					</Grid>
					<Grid item xs={3}>
						<CardCvcElement className={classes.stripe} />
					</Grid> */}
					<Grid item xs={12} sm={10}>
						<CardElement
							className={classes.cardElement}
							options={cardStyle}
							//	onChange={handleChange}
						/>
						<Button
							className={classes.button}
							disabled={processing || disabled || succeeded}
						>
							<Typography variant="caption" className={classes.span}>
								{processing ? (
									<div className="spinner" id="spinner"></div>
								) : (
									'Pay'
								)}
							</Typography>
						</Button>
					</Grid>
					{/* <Grid item xs={12} sm={10}>
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
					</Grid> */}
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
					{/* <Button
						color="primary"
						variant="contained"
						type="submit"
						onClick={nextStep}
						disabled={!stripe}
					>
						complete purchase
					</Button> */}
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
