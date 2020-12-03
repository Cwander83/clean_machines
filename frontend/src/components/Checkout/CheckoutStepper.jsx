import React from 'react';

// components
import DeliveryForm from './DeliveryForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import SuccessMessage from './SuccessMessage';
import ShippingForm from './ShippingForm';
//import BillingAddressForm from './BillingAddressForm';

// stripe
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// stripe promise
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
		// case 1:
		// 	return <BillingAddressForm nextStep={nextStep} />;
		// case 1:
		// 	return <DeliveryForm nextStep={nextStep} prevStep={prevStep} />;
		// case 2:
		// 	return <ShippingForm nextStep={nextStep} prevStep={prevStep} />;
		// case 3:
		// 	return <Review nextStep={nextStep} prevStep={prevStep} />;
		case 1:
			return (
				<Elements stripe={stripePromise}>
					<PaymentForm prevStep={prevStep} />
				</Elements>
			);
		case 5:
			return <SuccessMessage />;
		default:
			throw new Error('Unknown step');
	}
}
