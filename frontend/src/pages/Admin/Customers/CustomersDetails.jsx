import React from 'react';

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
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';

// components
import CustomersCreateRental from './CustomersCreateRental';
import UpdateCustomer from './UpdateCustomer';
import CustomerRentals from './CustomerRentals';
import CustomerSales from './CustomerSales';

const CustomersDetails = React.memo(() => {
	let { url, path } = useRouteMatch();
	let { id } = useParams();
	//let history = useHistory();

	const [customer, setCustomer] = React.useState({});

	const [open1, setOpen1] = React.useState(false);
	const [open2, setOpen2] = React.useState(false);

	const [billing, setBilling] = React.useState({});

	const [shipping, setShipping] = React.useState({});
	const [shippingAddress, setShippingAddress] = React.useState({});

	//const [rentals, setRentals] = React.useState({});

	const [isLoading, setIsLoading] = React.useState(false);

	console.log(shipping);

	React.useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const stripeData = await axios.get(`/customers/${id}`);
			const salesData = await axios.get(`/customers/sales/${id}`);
			//	const rentalData = await axios.get(`/customers/rentals/${id}`);

			setCustomer(stripeData.data);
			setBilling(stripeData.data.address);
			setShipping(stripeData.data.shipping);
			setShippingAddress(stripeData.data.shipping.address);

			setIsLoading(false);
		};

		fetchData();
	}, [id]);

	const handleClick1 = () => setOpen1(!open1);
	const handleClick2 = () => setOpen2(!open2);

	return (
		<Grid container spacing={2} justify="center" component={Paper}>
			<Grid item xs={12}>
				<Button component={Link} to="/admin/customers">
					table
				</Button>
				<Button component={Link} to={`${url}`}>
					details
				</Button>
				<Button component={Link} to={`${url}/rental`}>
					create rental
				</Button>
				<Button component={Link} to={`${url}/update`}>
					update
				</Button>

				<Typography variant="h3">Customer details</Typography>
			</Grid>

			<Switch>
				<Route exact path={path}>
					<Grid item xs={12} sm={6}>
						<Typography variant="h3">Billing</Typography>

						<address>
							{customer.name}
							<br />
							{customer.email}
							<br />
							{customer.phone}
							<br />
							{billing.line1}
							<br />
							{billing.line2}
							<br />
							{billing.city}, {billing.state}, {billing.postal_code}
						</address>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Typography variant="h3">Shipping</Typography>

						<address>
							{shipping.name}
							<br />
							{shipping.phone}
							<br />
							{shippingAddress.line1}
							<br />
							{shippingAddress.line2}
							<br />
							{shippingAddress.city}, {shippingAddress.state},
							{shippingAddress.postal_code}
						</address>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Typography variant="h3" onClick={handleClick1}>
							rentals {open1 ? <ExpandLess /> : <ExpandMore />}
						</Typography>
						<Collapse in={open1} timeout="auto" unmountOnExit>
							<CustomerRentals />
						</Collapse>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Typography variant="h3" onClick={handleClick2}>
							sales {open2 ? <ExpandLess /> : <ExpandMore />}
						</Typography>
						<Collapse in={open2} timeout="auto" unmountOnExit>
							<CustomerSales />
						</Collapse>
					</Grid>
				</Route>
				<Route path={`${url}/update`}>
					<UpdateCustomer />
				</Route>
				<Route path={`${path}/rental`}>
					<Grid item xs={12} sm={10}>
						<CustomersCreateRental />
					</Grid>
				</Route>
			</Switch>
		</Grid>
	);
});

export default CustomersDetails;
