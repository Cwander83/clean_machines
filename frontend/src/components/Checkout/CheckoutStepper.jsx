import React from 'react';

import DeliveryForm from './DeliveryForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import SuccessMessage from './SuccessMessage';
import ShippingForm from './ShippingForm';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import BillingAddressForm from './BillingAddressForm';

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
			return <BillingAddressForm nextStep={nextStep} />;
		case 2:
			return <DeliveryForm nextStep={nextStep} prevStep={prevStep} />;
		case 3:
			return <ShippingForm nextStep={nextStep} prevStep={prevStep} />;
		case 4:
			return <Review nextStep={nextStep} prevStep={prevStep} />;
		case 5:
			return (
				<Elements stripe={stripePromise}>
					<PaymentForm prevStep={prevStep} />
				</Elements>
			);
		case 6:
			return <SuccessMessage />;
		default:
			throw new Error('Unknown step');
	}
}
