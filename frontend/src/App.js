import React from 'react';

// react router
import { Route, Switch } from 'react-router-dom';

// auth 0
import { useAuth0 } from '@auth0/auth0-react';

// material ui
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

// components
import Admin from './pages/Admin/Admin';
import Home from './pages/Home/Home';
import Rentals from './pages/Rentals/Rentals';
import Sales from './pages/Sales/Sales';
import NotFound from './pages/NotFound';
import Spinner from './UI/Spinner';
import Contact from './pages/Contact/Contact';
import Tutorials from './pages/Tutorials/Tutorials';
import AdminRentals from './pages/Admin/Rentals/AdminRentals';
import AdminSales from './pages/Admin/Sales/AdminSales';
import AdminCustomers from './pages/Admin/Customers/AdminCustomers';
import Layout from './layout/Layout';
import Cart from './pages/Cart/Cart';
import Faq from './pages/Faq/Faq';

// context API
import RentalContextProvider from './context/rental-context';
import CartProvider from './context/cart-context';
import SalesContextProvider from './context/sales-context';
import AdminContextProvider from './context/admin-context';

// protected route
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
	const { isLoading } = useAuth0();

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<RentalContextProvider>
				<CartProvider>
					<SalesContextProvider>
						<AdminContextProvider>
							<Layout>
								<Switch>
									<Route exact path="/" component={Home} />

									<ProtectedRoute exact path="/admin" component={Admin} />
									<ProtectedRoute
										path="/admin/rentals"
										component={AdminRentals}
									/>
									<ProtectedRoute path="/admin/sales" component={AdminSales} />

									<ProtectedRoute
										path="/admin/customers"
										component={AdminCustomers}
									/>

									<Route path="/rentals" component={Rentals} />
									<Route path="/tutorials" component={Tutorials} />
									<Route path="/contact" component={Contact} />
									<Route path="/sales" component={Sales} />
									<Route path="/faq" component={Faq} />
									<Route path="/cart" component={Cart} />
									<Route component={NotFound} />
								</Switch>
							</Layout>
						</AdminContextProvider>
					</SalesContextProvider>
				</CartProvider>
			</RentalContextProvider>
		</MuiPickersUtilsProvider>
	);
}

export default App;
