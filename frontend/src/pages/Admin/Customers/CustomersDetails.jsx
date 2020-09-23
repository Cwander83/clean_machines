import React from 'react';
import axios from 'axios';

import {
	useParams,
	useRouteMatch,
	//useHistory,
	Link,
} from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const CustomersDetails = () => {
	let {
		//url,
		path,
	} = useRouteMatch();
	let { id } = useParams();
	//let history = useHistory();

	console.log(path);
	const [customer, setCustomer] = React.useState({});
	const [billingAddress, setBillingAddress] = React.useState({});
	const [sales, setSales] = React.useState({});
	//const [rentals, setRentals] = React.useState({});

	const [isLoading, setIsLoading] = React.useState(false);

	React.useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const stripeData = await axios.get(`/customers/${id}`);
			const salesData = await axios.get(`/customers/sales/${id}`);
			//	const rentalData = await axios.get(`/customers/rentals/${id}`);

			setCustomer(stripeData.data);
			setBillingAddress(stripeData.data.address);
			setSales(salesData.data);
			//setRentals(rentalData.data);

			setIsLoading(false);
		};

		fetchData();
	}, [id]);

	return (
		<Container maxWidth="xl">
			<Grid container spacing={2} justify="center" component={Paper}>
				{isLoading ? (
					<Grid item xs={12}>
						<CircularProgress />
						<h2>Loading...</h2>
					</Grid>
				) : (
					<>
						<Grid item xs={12}>
							<ButtonGroup>
								<Button component={Link} to="/admin/customers">
									back to table
								</Button>
								<Button>create rental</Button>
								<Button>update</Button>
							</ButtonGroup>
							<Typography variant="h3">{customer.name}</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography variant="h3">Billing</Typography>

							<Typography variant="body1">{customer.email}</Typography>
							<Typography variant="body1">{customer.phone}</Typography>
							<Typography variant="body1">{billingAddress.city}</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography variant="h3">Sales</Typography>
							<Typography variant="body1">{sales.email}</Typography>
							<Typography variant="body1">{sales.phone}</Typography>
							<Typography variant="body1">{billingAddress.city}</Typography>
						</Grid>
					</>
				)}
			</Grid>
		</Container>
	);
};

export default CustomersDetails;
