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
import Drawer from './components/Drawer';
import NotFound from './pages/NotFound';
import RentalContextProvider from './context/rental-context';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import ProtectedRoute from './routes/ProtectedRoute';
import Spinner from './UI/Spinner';
import Contact from './pages/Contact/Contact';
import Videos from './pages/Videos/Videos';
import AdminRentals from './pages/Admin/AdminRentals';
import AdminSales from './pages/Admin/AdminSales';
import AdminCustomers from './pages/Admin/AdminCustomers';
import AllProducts from './pages/Admin/AllProducts';

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
					<Drawer />

					<Switch>
						<Route exact path="/" component={Home} />
						<ProtectedRoute exact path="/admin" component={Admin} />
						<ProtectedRoute path="/admin/rentals" component={AdminRentals} />
						<ProtectedRoute path="/admin/sales" component={AdminSales} />
						<ProtectedRoute path="/admin/products" component={AllProducts} />
						<ProtectedRoute
							path="/admin/customers"
							component={AdminCustomers}
						/>
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
