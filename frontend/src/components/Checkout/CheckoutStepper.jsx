import React, { useState } from 'react';

// components
//import DeliveryForm from './DeliveryForm';
import ShippingForm from './ShippingForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import SuccessMessage from './SuccessMessage';
import BillingAddressForm from './BillingAddressForm';

// stripe
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// stripe promise
const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

export default function Checkout() {
	const [step, setStep] = useState(1);
	const [orderNumber, setOrderNumber] = useState(null);

	const nextStep = () => {
		setStep(step + 1);
	};

	const prevStep = () => {
		setStep(step - 1);
	};
	const orderHandler = (order) => setOrderNumber(order);

	switch (step) {
		case 1:
			return <BillingAddressForm nextStep={nextStep} />;
		// case 2:
		// 	return <DeliveryForm nextStep={nextStep} prevStep={prevStep} />;
		case 2:
			return <ShippingForm nextStep={nextStep} prevStep={prevStep} />;
		case 3:
			return <Review nextStep={nextStep} prevStep={prevStep} />;
		case 4:
			return (
				<Elements stripe={stripePromise}>
					<PaymentForm
						prevStep={prevStep}
						nextStep={nextStep}
						orderHandler={orderHandler}
					/>
				</Elements>
			);
		case 5:
			return <SuccessMessage orderNumber={orderNumber} />;
		default:
			throw new Error('Unknown step');
	}
}
