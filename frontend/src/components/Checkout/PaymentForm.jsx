import React, { useContext, useState } from 'react';

// axios
import axios from 'axios';

// react hooks form
import { useForm, Controller } from 'react-hook-form';

// material ui
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

// images/icons
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

// utils
import { states } from '../../utils/cart';

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
	const {
		cart,
		user,
		setUser,
		totals,
		updateBilling,
		setCart,
		setTotals,
	} = useContext(CartContext);

	const classes = useStyles();

	const { register, handleSubmit, errors, control } = useForm();

	const [error, setErrors] = useState(null);
	const [success, setSuccess] = useState(null);

	const stripe = useStripe();
	const elements = useElements();

	console.log(JSON.stringify([cart, user, totals], null, 2));

	const onSubmit = async (data) => {
		console.log(JSON.stringify(data, null, 2));
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
		await updateBilling(data);
		await handlePaymentMethodResult(payload);
	};

	const handlePaymentMethodResult = async (result) => {
		//console.log('hit');
		//console.log('results: ' + JSON.stringify(result, null, 2));
		//console.log('cart: ' + JSON.stringify(cart, null, 2));
		if (result.error) {
			// An error happened when collecting card details,
			// show `result.error.message` in the payment form.
			console.log('result error ' + JSON.stringify(result.error, null, 2));
			setErrors(result.error.message);
		} else {
			// Otherwise send paymentMethod.id to your server (see Step 3)
			await axios
				.post('/customers/pay', {
					// headers: { 'Content-Type': 'application/json' },
					// JSON.stringify({
					payment_method_id: result.paymentMethod.id,
					userData: user,
					productData: cart,
					totals: totals,
					//	}),
				})
				//.then((serverResponse) => serverResponse.json())
				.then((response) => handleServerResponse(response));
			// console.log(
			// 	'server response: ' + JSON.stringify(serverResponse, null, 2)
			// );
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
			<form
				noValidate
				className={classes.form}
				onSubmit={handleSubmit(onSubmit)}
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
							error={!!errors.billing_name}
							inputRef={register({ required: true })}
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
						<Typography variant="h6">{error ? error : null}</Typography>
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
