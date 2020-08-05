import React from 'react';

//import { Elements } from '@stripe/react-stripe-js';
//import { loadStripe } from '@stripe/stripe-js';

// import CheckoutForm from './components/Stripe/CheckoutForm';

import './App.css';

import { useAuth0 } from '@auth0/auth0-react';

import Admin from './pages/Admin/Admin';
import Home from './pages/Home/Home';
import { Route, Switch } from 'react-router-dom';
import Rentals from './pages/Rentals/Rentals';
import Sales from './pages/Sales/Sales';
import NavDrawer from './components/Drawer/Drawer';
import NotFound from './pages/NotFound';
import NotAuthorized from './pages/NotAuthorized';

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
			<NavDrawer />
			{isAuthenticated ? (
				<Route
					exact
					from="/admin"
					render={(props) =>
						isAuthenticated ? <Admin {...props} /> : <NotAuthorized />
					}
				/>
			) : (
				<Switch>
					<Route exact from="/" render={(props) => <Home {...props} />} />
					<Route
						exact
						from="/rentals"
						render={(props) => <Rentals {...props} />}
					/>
					<Route exact from="/sales" render={(props) => <Sales {...props} />} />
					<Route component={NotFound} />
				</Switch>
			)}
		</div>
	);
}

export default App;
