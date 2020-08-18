import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);


const useStyles = makeStyles((theme) => ({
	appBar: {
		position: 'relative',
	},
	layout: {
		width: 'auto',
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
			width: 600,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		padding: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
			marginTop: theme.spacing(6),
			marginBottom: theme.spacing(6),
			padding: theme.spacing(3),
		},
	},
	stepper: {
		padding: theme.spacing(3, 0, 5),
	},
	buttons: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	button: {
		marginTop: theme.spacing(3),
		marginLeft: theme.spacing(1),
	},
}));

export default function Checkout() {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);

	const handleNext = () => {
		setActiveStep(activeStep + 1);
	};

	const handleBack = () => {
		setActiveStep(activeStep - 1);
	};
	const steps = ['Shipping address', 'Review your order', 'payment'];

	function getStepContent(step) {
		switch (step) {
			case 0:
				return <AddressForm />;
			case 1:
				return <Review />;
			case 2:
				return <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>;
			default:
				throw new Error('Unknown step');
		}
	}

	return (
		<React.Fragment>
			<CssBaseline />

			<main className={classes.layout}>
				<Paper className={classes.paper}>
					<Typography component="h1" variant="h4" align="center">
						Checkout
					</Typography>
					<Stepper activeStep={activeStep} className={classes.stepper}>
						{steps.map((label) => (
							<Step key={label}>
								<StepLabel>{label}</StepLabel>
							</Step>
						))}
					</Stepper>
					<React.Fragment>
						{activeStep === steps.length ? (
							<React.Fragment>
								<Typography variant="h5" gutterBottom>
									Thank you for your order.
								</Typography>
								<Typography variant="subtitle1">
									Your order number is #2001539. We have emailed your order
									confirmation, and will send you an update when your order has
									shipped.
								</Typography>
							</React.Fragment>
						) : (
							<React.Fragment>
								{getStepContent(activeStep)}
								<div className={classes.buttons}>
									{activeStep !== 0 && (
										<Button onClick={handleBack} className={classes.button}>
											Back
										</Button>
									)}
									<Button
										variant="contained"
										color="primary"
										onClick={handleNext}
										className={classes.button}
									>
										{activeStep === steps.length - 1 ? 'Place order' : 'Next'}
									</Button>
								</div>
							</React.Fragment>
						)}
					</React.Fragment>
				</Paper>
			</main>
		</React.Fragment>
	);
}

// import React from 'react';

// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// const CheckoutForm = () => {
// 	const stripe = useStripe();
// 	const elements = useElements();

// 	const handleSubmit = async (event) => {
// 		// We don't want to let default form submission happen here,
// 		// which would refresh the page.
// 		event.preventDefault();

// 		const result = await stripe.createPaymentMethod({
// 			type: 'card',
// 			card: elements.getElement(CardElement),
// 		});

// 		handlePaymentMethodResult(result);
// 	};

// 	const handlePaymentMethodResult = async (result) => {
// 		const user = {
// 			name: 'chris',
// 			email: 'test@abc.com',
// 			phone: 111111111,
// 			amount: 2000,
// 			items: 'AG1000',
// 			city: 'Orlando',
// 			line1: '23 abd st.',
// 			line2: 'po box 22',
// 			country: 'US',
// 			state: 'FL',
// 			postal_code: 32807,
// 			shipping_name: 'tj max',
// 			shipping_phone: '1111111111',
// 			shipping_city: 'Orlando',
// 			shipping_line1: '23 abd st.',
// 			shipping_line2: 'po box 22',
// 			shipping_country: 'US',
// 			shipping_state: 'FL',
// 			shipping_postal_code: 32807,
// 			rental_boolean: true,
// 			sales_boolean: true,
// 			rental: [
// 				{
// 					product_id: 1,
// 					rental_price_day: 5,
// 					rental_days: 20,
// 					rental_start_date: new Date('2020-10-01T14:31:00-04:00'),
// 					rental_end_date: new Date('2020-10-20T14:31:00-04:00'),
// 					deposit: 10,
// 				},
// 				{
// 					product_id: 3,
// 					rental_price_day: 5,
// 					rental_days: 4,
// 					rental_start_date: new Date('2020-10-01T14:31:00-04:00'),
// 					rental_end_date: new Date('2020-10-10T14:31:00-04:00'),
// 					deposit: 3,
// 				},
// 				{
// 					product_id: 5,
// 					rental_price_day: 5,
// 					rental_days: 10,
// 					rental_start_date: new Date('2020-10-05T14:31:00-04:00'),
// 					rental_end_date: new Date('2020-10-25T14:31:00-04:00'),
// 					deposit: 3,
// 				},
// 			],
// 			sales: [
// 				// {
// 				// 	product_id: 2,
// 				// 	units: 1,
// 				// 	price_per_unit: 2,
// 				// },
// 				// {
// 				// 	product_id: 1,
// 				// 	units: 1,
// 				// 	price_per_unit: 2,
// 				// },
// 				// {
// 				// 	product_id: 2,
// 				// 	units: 3,
// 				// 	price_per_unit: 12,
// 				// },
// 				// {
// 				// 	product_id: 4,
// 				// 	units: 1,
// 				// 	price_per_unit: 2,
// 				// },
// 				// {
// 				// 	product_id: 2,
// 				// 	units: 71,
// 				// 	price_per_unit: 102,
// 				// },
// 			],
// 		};
// 		console.log('hit');
// 		if (result.error) {
// 			// An error happened when collecting card details,
// 			// show `result.error.message` in the payment form.
// 		} else {
// 			// Otherwise send paymentMethod.id to your server (see Step 3)
// 			const response = await fetch('/customers/pay', {
// 				method: 'POST',
// 				headers: { 'Content-Type': 'application/json' },
// 				body: JSON.stringify({
// 					payment_method_id: result.paymentMethod.id,

// 					userData: user,
// 				}),
// 			});

// 			const serverResponse = await response.json();

// 			handleServerResponse(serverResponse);
// 		}
// 	};

// 	const handleServerResponse = (serverResponse) => {
// 		if (serverResponse.error) {
// 			// An error happened when charging the card,
// 			// show the error in the payment form.
// 		} else {
// 			// Show a success message
// 		}
// 	};

// 	const handleCardChange = (event) => {
// 		if (event.error) {
// 			// Show `event.error.message` in the payment form.
// 		}
// 	};

// 	return (
// 		<form onSubmit={handleSubmit}>
// 			<CardElement onChange={handleCardChange} />
// 			<button type="submit" disabled={!stripe}>
// 				Submit Payment
// 			</button>
// 		</form>
// 	);
// };

// export default CheckoutForm;
