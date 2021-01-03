import React, { useContext, useState } from 'react';

import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

// icons
import icon1 from '../../assets/CCLOGOS/1.png';
import icon2 from '../../assets/CCLOGOS/2.png';
import icon3 from '../../assets/CCLOGOS/14.png';
import icon4 from '../../assets/CCLOGOS/22.png';

import {
	CardNumberElement,
	CardExpiryElement,
	CardCvcElement,
	useStripe,
	useElements,
} from '@stripe/react-stripe-js';

import { CartContext } from '../../context/cart-context';

const useStyles = makeStyles((theme) => ({
	form: {
		width: '100%',
		marginTop: '20px',
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
		paddingLeft: 0,
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
		marginBottom: '15px',
	},
	loading: {
		color: 'white',
		marginLeft: '10px',
		marginRight: '10px',
	},
	stripeCaption: {
		textAlign: 'center',
		fontStyle: 'italic',
		color: theme.palette.grey.main,
	},
}));

export default function PaymentForm({ prevStep, nextStep }) {
	const { cart, user, totals, setUser, setTotals, setCart } = useContext(
		CartContext
	);
	const classes = useStyles();

	const stripe = useStripe();
	const elements = useElements();

	const [errors, setErrors] = useState(null);
	const [success, setSuccess] = useState(false);
	const [isProcessing, setIsProcessing] = useState(false);

	//console.log(JSON.stringify(cart, null, 2));

	const handleSubmit = async (event) => {
		event.preventDefault();

		setIsProcessing(true);

		if (!stripe || !elements) {
			// Stripe.js has not loaded yet. Make sure to disable
			// form submission until Stripe.js has loaded.
			return;
		}

		const payload = await stripe.createPaymentMethod({
			type: 'card',
			card: elements.getElement(CardNumberElement),
			billing_details: {
				name: user.billing_name,
				email: user.billing_email,
				phone: user.billing_phone,
				address: {
					city: user.billing_city,
					state: user.billing_state,
					line1: user.billing_line1,
					line2: user.billing_line2,
					postal_code: user.billing_postal_code,
				},
			},
		});
		console.log('[PaymentMethod]', payload);
		handlePaymentMethodResult(payload);
	};

	const handlePaymentMethodResult = async (result) => {
		console.log('hit');
		console.log('results: ' + result);
		console.log('cart: ' + JSON.stringify(cart, null, 2));
		if (result.error) {
			// An error happened when collecting card details,
			// show `result.error.message` in the payment form.
			console.log('result error ' + JSON.stringify(result.error, null, 2));
			setErrors('Card Read Error: ' + result.error.message);
			setIsProcessing(false);
		} else {
			// Otherwise send paymentMethod.id to your server (see Step 3)
			const response = await fetch('/api/customers/pay', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					payment_method_id: result.paymentMethod.id,

					userData: user,
					productData: cart,
					totalData: totals,
				}),
			});

			const serverResponse = await response.json();

			handleServerResponse(serverResponse);
		}
	};

	const handleServerResponse = (serverResponse) => {
		console.log('serverResponse' + JSON.stringify(serverResponse, null, 2));
		if (serverResponse.error) {
			// An error happened when charging the card,
			// show the error in the payment form.
			console.log(
				'serverResponse.error ' + JSON.stringify(serverResponse.error, null, 2)
			);
			setErrors('Server Error: ' + serverResponse.error);
			setIsProcessing(false);
		} else {
			// Show a success message

			setSuccess(true);
			setIsProcessing(false);
			setUser({});
			setCart([]);
			setTotals({});
			// TODO navigate to success page
			nextStep();
		}
	};

	return (
		<React.Fragment>
			<Typography className={classes.title} variant="h6" gutterBottom>
				Payment method
			</Typography>
			<form noValidate className={classes.form} onSubmit={handleSubmit}>
				<Grid container spacing={3} justify="center">
					<Grid item xs={12} sm={10}>
						<TextField
							required
							id="cardName"
							label="Name on card"
							defaultValue={user.billing_name}
							fullWidth
							autoComplete="cc-name"
						/>
					</Grid>
					<Grid item xs={12} sm={10}>
						<CardNumberElement className={classes.stripe} />
					</Grid>
					<Grid item xs={7} sm={7}>
						<CardExpiryElement className={classes.stripe} />
					</Grid>
					<Grid item xs={5} sm={3}>
						<CardCvcElement className={classes.stripe} />
					</Grid>
					<Grid item xs={12}>
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
						<Typography variant="h6" className={classes.stripeCaption}>
							POWERED BY STRIPE
						</Typography>
					</Grid>
					<Grid item xs={10}>
						<Typography variant="h6" color="error">
							{errors ? errors : null}
						</Typography>
					</Grid>
					<Grid item xs={10}>
						<Typography variant="h6">
							{success ? 'payment completed' : null}
						</Typography>
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
						// onClick={nextStep}
						disabled={!stripe || isProcessing}
						//disabled={true}
					>
						{isProcessing ? (
							<CircularProgress size={16} className={classes.loading} />
						) : (
							'Complete payment'
						)}
					</Button>
				</Grid>
			</form>
		</React.Fragment>
	);
}
