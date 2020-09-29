import React from 'react';

// react router
import { Route, Switch } from 'react-router-dom';

// CSS
import './App.css';

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
import NavDrawer from './components/NavDrawer';
import NotFound from './pages/NotFound';
import Spinner from './UI/Spinner';
import Contact from './pages/Contact/Contact';
import Videos from './pages/Videos/Videos';
import AdminRentals from './pages/Admin/Rentals/AdminRentals';
import AdminSales from './pages/Admin/Sales/AdminSales';
import AdminCustomers from './pages/Admin/Customers/AdminCustomers';
import AllProducts from './pages/Admin/Products/AllProducts';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer';

// context API
import RentalContextProvider from './context/rental-context';
import CartProvider from './context/cart-context';
import SalesContextProvider from './context/sales-context';
import AdminContextProvider from './context/admin-context';
import ModalProvider from './context/modal-context';

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
							<ModalProvider>
								<div className="App">
									<NavDrawer />

									<Switch>
										<Route exact path="/" component={Home} />

										<ProtectedRoute exact path="/admin" component={Admin} />
										<ProtectedRoute
											path="/admin/rentals"
											component={AdminRentals}
										/>
										<ProtectedRoute
											path="/admin/sales"
											component={AdminSales}
										/>
										<ProtectedRoute
											path="/admin/products"
											component={AllProducts}
										/>
										<ProtectedRoute
											path="/admin/customers"
											component={AdminCustomers}
										/>

										<Route path="/rentals" component={Rentals} />
										<Route path="/videos" component={Videos} />
										<Route path="/contact" component={Contact} />
										<Route path="/sales" component={Sales} />
										<Route path="/cart" component={Cart} />
										<Route component={NotFound} />
									</Switch>
									<Footer />
								</div>
							</ModalProvider>
						</AdminContextProvider>
					</SalesContextProvider>
				</CartProvider>
			</RentalContextProvider>
		</MuiPickersUtilsProvider>
	);
}

export default App;
