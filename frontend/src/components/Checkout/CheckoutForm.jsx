import React from 'react';

import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import SuccessMessage from './SuccessMessage';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

export default function Checkout() {
	const [step, setStep] = React.useState(1);

	const nextStep = () => {
		setStep(step + 1);
	};

	const prevStep = () => {
		setStep(step - 1);
	};

	switch (step) {
		case 1:
			return <AddressForm nextStep={nextStep} />;
		case 2:
			return <Review nextStep={nextStep} prevStep={prevStep} />;
		case 3:
			return (
				<Elements stripe={stripePromise}>
					<PaymentForm prevStep={prevStep} />
				</Elements>
			);
		case 4:
			return <SuccessMessage />;
		default:
			throw new Error('Unknown step');
	}
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
