import React, { useEffect, memo, useContext } from 'react';

// axios
import axios from 'axios';

// react router
import {
	useParams,
	useRouteMatch,
	//useHistory,
	Link,
	Switch,
	Route,
} from 'react-router-dom';

// material ui
//import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

// components
import CustomersCreateRental from './CustomersCreateRental';
import UpdateCustomer from './UpdateCustomer';
import CustomerRentals from './CustomerRentals';
import CustomerSales from './CustomerSales';
import CustomerBilling from './CustomerBilling';
import CustomerShipping from './CustomerShipping';

// context api
import { AdminContext } from '../../../context/admin-context';

const CustomersDetails = () => {
	let { url, path } = useRouteMatch();

	let { id } = useParams(); //let history = useHistory();

	//const [customer, setCustomer] = useState({});

	let { customer, setCustomer } = useContext(AdminContext);

	console.log(customer);

	useEffect(() => {
		const fetchData = async () => {
			const stripeData = await axios.get(`/customers/${id}`);

			setCustomer(stripeData.data);
		};

		fetchData();
	}, [id, setCustomer]);

	return (
		<Grid container spacing={2} justify="center" component={Paper}>
			<Grid item xs={12}>
				<Button component={Link} to="/admin/customers">
					table
				</Button>
				<Button component={Link} to={`${url}`}>
					details
				</Button>
				<Button component={Link} to={`${url}/rentals`}>
					rentals
				</Button>
				<Button component={Link} to={`${url}/sales`}>
					sales
				</Button>
				<Button component={Link} to={`${url}/create-rental`}>
					create rental
				</Button>
				<Button component={Link} to={`${url}/update`}>
					update
				</Button>
				<Divider />
			</Grid>

			<Switch>
				<Route exact path={path}>
					<Grid item xs={12} sm={6}>
						<Typography variant="h4">Billing</Typography>
						<CustomerBilling />
					</Grid>
					<Grid item xs={12} sm={6}>
						<Typography variant="h4">Shipping</Typography>
						<CustomerShipping />
					</Grid>
				</Route>
				<Route path={`${url}/update`}>
					<UpdateCustomer />
				</Route>
				<Route path={`${path}/create-rental`}>
					<Grid item xs={12} sm={10}>
						<CustomersCreateRental />
					</Grid>
				</Route>
				<Route path={`${path}/rentals`}>
					<Grid item xs={12} sm={10}>
						<CustomerRentals />
					</Grid>
				</Route>
				<Route path={`${path}/sales`}>
					<Grid item xs={12} sm={10}>
						<CustomerSales />
					</Grid>
				</Route>
			</Switch>
		</Grid>
	);
};

export default memo(CustomersDetails);
