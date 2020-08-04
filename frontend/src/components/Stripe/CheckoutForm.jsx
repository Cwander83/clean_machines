import React, { useState, useEffect } from 'react';

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const user = {
	name: 'chris',
	email: 'test@abc.com',
	phone: 111111111,
	amount: 2000,
	items: 'AG1000',
	city: 'Orlando',
	line1: '23 abd st.',
	line2: 'po box 22',
	country: 'US',
	state: 'FL',
	postal_code: 32807,
	shipping_name: 'tj max',
	shipping_phone: '1111111111',
	shipping_city: 'Orlando',
	shipping_line1: '23 abd st.',
	shipping_line2: 'po box 22',
	shipping_country: 'US',
	shipping_state: 'FL',
	shipping_postal_code: 32807,
	rental_boolean: true,
	sales_boolean: true,
	rental: [
		{
			product_id: 1,
			rental_price_day: 1,
			rental_days: 1,
			rental_start_date: 'july 12',
			rental_end_date: ' july 13',
			deposit: 1,
		},
		{
			product_id: 3,
			rental_price_day: 1,
			rental_days: 2,
			rental_start_date: 'july 11',
			rental_end_date: ' july 13',
			deposit: 3,
		},
		{
			product_id: 3,
			rental_price_day: 1,
			rental_days: 2,
			rental_start_date: 'july 11',
			rental_end_date: ' july 13',
			deposit: 3,
		},
	],
	sales: [
		{
			product_id: 2,
			units: 1,
			price_per_unit: 2,
		},
		{
			product_id: 1,
			units: 1,
			price_per_unit: 2,
		},
		{
			product_id: 2,
			units: 3,
			price_per_unit: 12,
		},
		{
			product_id: 4,
			units: 1,
			price_per_unit: 2,
		},
		{
			product_id: 2,
			units: 71,
			price_per_unit: 102,
		},
	],
};

export default function CheckoutForm() {
	const [succeeded, setSucceeded] = useState(false);

	const [error, setError] = useState(null);

	const [processing, setProcessing] = useState('');

	const [disabled, setDisabled] = useState(true);

	const [clientSecret, setClientSecret] = useState('');

	const stripe = useStripe();

	const elements = useElements();

	useEffect(() => {
		// Create PaymentIntent as soon as the page loads

		window

			.fetch('/customers/create-payment-intent', {
				method: 'POST',

				headers: {
					'Content-Type': 'application/json',
				},

				body: JSON.stringify({ items: user }),
			})

			.then((res) => {
				return res.json();
			})

			.then((data) => {
				setClientSecret(data.clientSecret);
			});
	}, []);

	const cardStyle = {
		style: {
			base: {
				color: '#32325d',

				fontFamily: 'Arial, sans-serif',

				fontSmoothing: 'antialiased',

				fontSize: '16px',

				'::placeholder': {
					color: '#32325d',
				},
			},

			invalid: {
				color: '#fa755a',

				iconColor: '#fa755a',
			},
		},
	};

	const handleChange = async (event) => {
		// Listen for changes in the CardElement

		// and display any errors as the customer types their card details

		setDisabled(event.empty);

		setError(event.error ? event.error.message : '');
	};

	const handleSubmit = async (ev) => {
		ev.preventDefault();

		setProcessing(true);

		const payload = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: elements.getElement(CardElement),

				// billing_details: {
				// 	name: ev.target.name.value,
				// },
				// billing_details: {
				// 	address: {
				// 		city: 'Orlando',
				// 		postal_code: 32807,
				// 		line1: '111 abc st.',
				// 		line2: 'apt 23',
				// 		country: 'US',
				// 	},
				// 	email: 'abc@abc.com',
				// 	name: 'chris',
				// 	phone: '112-111-1111',
				// },
			},
		});

		if (payload.error) {
			setError(`Payment failed ${payload.error.message}`);

			setProcessing(false);
		} else {
			setError(null);

			setProcessing(false);

			setSucceeded(true);
		}
	};

	return (
		<form id="payment-form" onSubmit={handleSubmit}>
			<CardElement
				id="card-element"
				options={cardStyle}
				onChange={handleChange}
			/>

			<button disabled={processing || disabled || succeeded} id="submit">
				<span id="button-text">
					{processing ? <div className="spinner" id="spinner"></div> : 'Pay'}
				</span>
			</button>

			{/* Show any error that happens when processing the payment */}

			{error && (
				<div className="card-error" role="alert">
					{error}
				</div>
			)}

			{/* Show a success message upon completion */}

			<p className={succeeded ? 'result-message' : 'result-message hidden'}>
				Payment succeeded, see the result in your
				<a href={`https://dashboard.stripe.com/test/payments`}>
					{' '}
					Stripe dashboard.
				</a>{' '}
				Refresh the page to pay again.
			</p>
		</form>
	);
}
