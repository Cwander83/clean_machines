import React from 'react';

//import { Elements } from '@stripe/react-stripe-js';
//import { loadStripe } from '@stripe/stripe-js';

// import CheckoutForm from './components/Stripe/CheckoutForm';

import './App.css';

import { useAuth0 } from '@auth0/auth0-react';

import DateFnsUtils from '@date-io/date-fns';
import Admin from './pages/Admin/Admin';
import Home from './pages/Home/Home';
import { Route, Switch } from 'react-router-dom';
import Rentals from './pages/Rentals/Rentals';
import Sales from './pages/Sales/Sales';
import NavDrawer from './components/Drawer/Drawer';
import NotFound from './pages/NotFound';
import RentalContextProvider from './context/rental-context';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import ProtectedRoute from './routes/ProtectedRoute';
import Spinner from './UI/Spinner';
import Contact from './pages/Contact/Contact';
import Videos from './pages/Videos/Videos';

//import CardSection from './components/Stripe/CardSection';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

function App() {
	const { isLoading } = useAuth0();

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<RentalContextProvider>
				<div className="App">
					<NavDrawer />

					<Switch>
						<Route exact path="/" component={Home} />
						<ProtectedRoute path="/admin" component={Admin} />
						<Route path="/rentals" component={Rentals} />
						<Route path="/videos" component={Videos} />
						<Route path="/contact" component={Contact} />
						<Route path="/sales" component={Sales} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</RentalContextProvider>
		</MuiPickersUtilsProvider>
	);
}

export default App;
