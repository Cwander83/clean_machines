import React from 'react';

//import { Elements } from '@stripe/react-stripe-js';
//import { loadStripe } from '@stripe/stripe-js';

// import CheckoutForm from './components/Stripe/CheckoutForm';


import './App.css';

import { useAuth0 } from '@auth0/auth0-react';
import Header from './components/Header';
import Admin from './pages/Admin/Admin';
import Home from './pages/Home/Home';

//import CardSection from './components/Stripe/CardSection';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.


function App() {
	const { isLoading, isAuthenticated, error } = useAuth0();

	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (error) {
		return <div>Oops... {error.message}</div>;
	}

	return (
		<div className="App">
			
			<Header />
			{isAuthenticated ? <Admin /> : <Home />}
		</div>
	);
}

export default App;
