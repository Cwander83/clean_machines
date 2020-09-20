import React from 'react';

import { useParams } from 'react-router-dom';

import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({}));

const RentalsDetails = () => {
	const classes = useStyles();
	//let { url, path } = useRouteMatch();
	let { id } = useParams();

	console.log('id: ' + id);

	const [data, setData] = React.useState({});
	React.useEffect(() => {
		const fetchData = async () => {
			const result = await axios(`/rentals/${id}`);

			setData(result.data);
		};
		fetchData();
	}, [id]);

	console.log(data);

	return (
		<Grid container spacing={2}  className={classes.root}>
			<Grid item xs={4} component={Paper}>
				<Typography variant="body1">Billing Information</Typography>
				<Divider />
				<Typography variant="body1">{data.billing_name}</Typography>
				<Typography variant="body1">{data.billing_email}</Typography>
				<Typography variant="body1">{data.billing_phone}</Typography>
				<address>
					{data.billing_company_name}
					<br />
					{data.billing_line1}
					<br />
					{data.billing_line2}
					<br />
					{data.billing_city} {data.billing_state}, {data.postal_code}
					<br />
				</address>
			</Grid>
			<Grid item xs={4} component={Paper}>
				<Typography variant="body1">Delivery Information</Typography>
				<Divider />
				<Typography variant="body1">{data.delivery_name}</Typography>
				<Typography variant="body1">{data.delivery_email}</Typography>
				<Typography variant="body1">{data.delivery_phone}</Typography>
				<address>
					{data.delivery_company_name}
					<br />
					{data.delivery_line1}
					<br />
					{data.delivery_line2}
					<br />
					{data.delivery_city} {data.delivery_state}, {data.postal_code}
					<br />
				</address>
			</Grid>
			<Grid item xs={4} component={Paper}>
			<Typography variant="body1">Rental Information</Typography>
				<Divider />
				<Typography variant="body1">{data.delivery_name}</Typography>
			</Grid>
		</Grid>
	);
};

export default RentalsDetails;
