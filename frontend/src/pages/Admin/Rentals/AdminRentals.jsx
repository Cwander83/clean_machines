import React from 'react';

// react router
import {
	Switch,
	Route,
	Link,
	useRouteMatch,
	//useParams,
} from 'react-router-dom';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// components
import RentalsTable from './RentalsTable';
import RentalsDetails from './RentalsDetails';
import CurrentRentals from '../CurrentRentals';
import RentalProductsTable from './RentalProductsTable';
import RentalsProductDetails from './RentalsProductDetails';
import AdminCreateRentalProducts from './AdminCreateRentalProduct';

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
					Rentals
				</Button>
				<Button component={Link} to={`${path}/products`}>
					Products
				</Button>
				<Button component={Link} to={`${path}/create`}>
					add Product
				</Button>
			</Grid>

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

				<Route path={`${path}/rental/:id`}>
					<RentalsDetails />
				</Route>
				<Route path={`${path}/products`}>
					<Grid item xs={12} md={10}>
						<RentalProductsTable />
					</Grid>
				</Route>
				<Route path={`${path}/products/:id`}>
					<Grid item xs={12} md={10}>
						<RentalsProductDetails />
					</Grid>
				</Route>
				<Route path={`${path}/create`}>
					<Grid item xs={10}>
						<Grid item xs={12}>
							<Typography variant="h3">Create Rental Product</Typography>
						</Grid>
						<AdminCreateRentalProducts />
					</Grid>
				</Route>
			</Switch>
		</Grid>
	);
};

export default AdminRentals;
