import React from 'react';
import axios from 'axios';

import { useParams, useRouteMatch, useHistory } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const CustomersDetails = () => {
	let { url } = useRouteMatch();
	let { id } = useParams();
	let history = useHistory();

	const [customer, setCustomer] = React.useState({});

	const [isLoading, setIsLoading] = React.useState(false);

	React.useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const result = await axios.get(`/customers/${id}`);

			setCustomer(result.data);
			setIsLoading(false);
		};

		fetchData();
	}, []);
	console.log(customer);
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
								<Button onClick={history.goBack}>back to table</Button>
								<Button>create rental</Button>
								<Button>update</Button>
							</ButtonGroup>
							<Typography variant="h3">{customer.name}</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography variant="h3">Billing</Typography>
							<Typography variant="body1">{customer.email}</Typography>
							<Typography variant="body1">{customer.phone}</Typography>
						</Grid>
					</>
				)}
			</Grid>
		</Container>
	);
};

export default CustomersDetails;
