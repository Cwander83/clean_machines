import React, { useState, memo, useEffect } from 'react';

// react router
import { useParams } from 'react-router-dom';

// axios
import axios from 'axios';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles((theme) => ({
	list: {
		textAlign: 'center',
	},
	subHeader: {
		backgroundColor: theme.palette.primary.main,
		color: 'black',
		padding: '5px 0',
	},
}));

const RentalsDetails = () => {
	const classes = useStyles();

	let { id } = useParams();

	console.log('id: ' + id);

	const [data, setData] = useState({});
	const [product, setProduct] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(`/rentals/${id}`);

			setData(result.data);
			setProduct(result.data.product);
		};
		fetchData();
	}, [id]);

	console.log(data, product);

	return (
		<Grid container spacing={2} className={classes.root} justify="center">
			<Grid item xs={11} sm={5} component={Paper}>
				<List>
					<ListSubheader className={classes.subHeader}>
						<Typography variant="h5">Billing Information</Typography>
					</ListSubheader>
					<Divider />
					<ListItem>
						<Typography variant="body1">
							Billing Name: {data.billing_name}
						</Typography>
					</ListItem>
					<ListItem>
						<Typography variant="body1">
							Billing Email: {data.billing_email}
						</Typography>
					</ListItem>
					<ListItem>
						<Typography variant="body1">
							Billing Phone: {data.billing_phone}
						</Typography>
					</ListItem>
					<ListItem>
						<Typography variant="body1">
							Billing Company: {data.billing_company_name}
						</Typography>
					</ListItem>
					<ListItem alignItems="center">
						<address>
							<br />
							{data.billing_line1}
							<br />
							{data.billing_line2}
							<br />
							{data.billing_city} {data.billing_state}, {data.billing_zipcode}
							<br />
						</address>
					</ListItem>
				</List>
			</Grid>
			<Grid item xs={11} sm={5} component={Paper}>
				<List>
					<ListSubheader className={classes.subHeader}>
						<Typography variant="h5">Delivery Information</Typography>
					</ListSubheader>
					<Divider />
					<ListItem>
						<Typography variant="body1">
							Delivery Name: {data.delivery_name}
						</Typography>
					</ListItem>
					<ListItem>
						<Typography variant="body1">
							Delivery Email: {data.delivery_email}
						</Typography>
					</ListItem>
					<ListItem>
						<Typography variant="body1">
							Delivery Phone: {data.delivery_phone}
						</Typography>
					</ListItem>
					<ListItem>
						<Typography variant="body1">
							Delivery Company: {data.delivery_company_name}
						</Typography>
					</ListItem>
					<ListItem alignItems="center">
						<address>
							<br />
							{data.delivery_line1}
							<br />
							{data.delivery_line2}
							<br />
							{data.delivery_city} {data.delivery_state},{' '}
							{data.delivery_zipcode}
							<br />
						</address>
					</ListItem>
				</List>
			</Grid>
			<Grid item xs={11} sm={10} component={Paper}>
				<List className={classes.list}>
					<ListSubheader className={classes.subHeader}>
						<Typography variant="h5">Rental Information</Typography>
					</ListSubheader>
					<Divider />
					<ListItem>
						<Typography variant="body1">
							Rental Model: {product.model}
						</Typography>
					</ListItem>
					<ListItem>
						<Typography variant="body1">
							Start Date: {data.start_date}
						</Typography>
					</ListItem>
					<ListItem>
						<Typography variant="body1">End Date: {data.end_date}</Typography>
					</ListItem>
					<ListItem>
						<Typography variant="body1">
							Rental Total: ${data.rental_total}
						</Typography>
					</ListItem>
				</List>
			</Grid>
		</Grid>
	);
};

export default memo(RentalsDetails);
