import React, { lazy } from 'react';

// react router
import { Route, Switch } from 'react-router-dom';

// auth 0
//import { useAuth0 } from '@auth0/auth0-react';

// material ui
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

// context API
import RentalContextProvider from './context/rental-context';
import CartProvider from './context/cart-context';
import SalesContextProvider from './context/sales-context';
//import AdminContextProvider from './context/admin-context';

// protected route
import ProtectedRoute from './routes/ProtectedRoute';
// components
import ReactAdmin from './pages/ReactAdmin/ReactAdmin';
const Home = lazy(() => import('./pages/Home/Home'));
const Rentals = lazy(() => import('./pages/Rentals/Rentals'));
const Sales = lazy(() => import('./pages/Sales/Sales'));
//const NotFound = lazy(() => import('./pages/NotFound'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Tutorials = lazy(() => import('./pages/Tutorials/Tutorials'));
// const AdminRentals = lazy(() => import('./pages/Admin/Rentals/AdminRentals'));
// const AdminSales = lazy(() => import('./pages/Admin/Sales/AdminSales'));
// const AdminProducts = lazy(() =>
// 	import('./pages/Admin/Products/AdminProducts')
// );
const Layout = lazy(() => import('./layout/Layout'));
const Cart = lazy(() => import('./pages/Cart/Cart'));
const Faq = lazy(() => import('./pages/Faq/Faq'));

function App() {
	//const { isLoading } = useAuth0();

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Switch>
				<ProtectedRoute path="/admin" component={ReactAdmin}/>
				

				<RentalContextProvider>
					<CartProvider>
						<SalesContextProvider>
							<Layout>
								<Route exact path="/" component={Home} />

								{/* <ProtectedRoute
										path="/admin/rentals"
										component={AdminRentals}
									/>
									<ProtectedRoute path="/admin/sales" component={AdminSales} />

									<ProtectedRoute
										path="/admin/products"
										component={AdminProducts}
									/> */}

								<Route path="/rentals" component={Rentals} />
								<Route path="/tutorials" component={Tutorials} />
								<Route path="/contact" component={Contact} />
								<Route path="/sales" component={Sales} />
								<Route path="/faq" component={Faq} />
								<Route path="/cart" component={Cart} />
							</Layout>
							{/* <Route component={NotFound} /> */}
						</SalesContextProvider>
					</CartProvider>
				</RentalContextProvider>
			</Switch>
		</MuiPickersUtilsProvider>
	);
}

export default App;
