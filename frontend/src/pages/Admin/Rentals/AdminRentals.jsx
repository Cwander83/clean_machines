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

import RentalsTable from './RentalsTable';
import RentalsDetails from './RentalsDetails';
import CurrentRentals from '../CurrentRentals';

const useStyles2 = makeStyles((theme) => ({
	root: {},
	// table: {
	// 	minWidth: 400,
	// },
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
						<Typography variant="h4">Active Rentals</Typography>
						<CurrentRentals />
					</Grid>
						<Grid item xs={12} md={10}>
						<Typography variant="h4">All Rentals</Typography>
						<RentalsTable />
					</Grid>
				</Route>

				<Route path={`${path}/:id`}>
					<RentalsDetails />
				</Route>
			</Switch>
		</Grid>
	);
};

export default AdminRentals;
