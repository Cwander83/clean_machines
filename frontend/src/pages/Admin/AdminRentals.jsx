import React from 'react';

import {
	
	Switch,
	Route,
	Link,
	useRouteMatch,
	//useParams,
} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import RentalsTable from '../../components/Tables/RentalsTable';
import AdminCreateRental from '../../components/AdminCreateRental';

const useStyles2 = makeStyles((theme) => ({
	root: {
		flexShrink: 3,
	},
	table: {
		minWidth: 400,
	},
}));

const AdminRentals = () => {
	const classes = useStyles2();

	let { path, url } = useRouteMatch();

	return (
		<Grid container justify="center" className={classes.root}>
			<Grid item xs={12}>
				<Typography variant="h3">Rentals</Typography>
				
				<Button component={Link} to={`${url}`}>
					Rental Table
				</Button>
			</Grid>

			<Grid item xs={12} md={10}></Grid>

			<Switch>
				<Route exact path={path}>
					<Grid item xs={12} md={10}>
						<RentalsTable />
					</Grid>
				</Route>

				
				<Route path={`${path}/:rentalID`}>
					<AdminCreateRental />
				</Route>
			</Switch>
		</Grid>
	);
};

export default AdminRentals;
