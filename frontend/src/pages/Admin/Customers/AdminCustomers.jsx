import React from 'react';

// react router
import {
	Switch,
	Route,
	// Link,
	useRouteMatch,
} from 'react-router-dom';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';

// components
import CustomersTable from './CustomersTable';
import CustomersDetails from './CustomersDetails';

const useStyles = makeStyles((theme) => ({
	root: {},
	title: {
		marginBottom: '30px',
	}
}));

const AdminCustomers = () => {
	const classes = useStyles();

	let {
		path,
		// url
	} = useRouteMatch();

	return (
		<Grid container justify="center"  className={classes.root}>
			<Grid item xs={12}>
				<Typography variant="h3" className={classes.title}>Customers</Typography>
			</Grid>
			<Switch>
				<Route exact path={path}>
					<Grid item xs={12} md={10}>
						<CustomersTable />
					</Grid>
				</Route>
				<Route path={`${path}/:id`}>
					<Grid item xs={12} sm={10}>
						<CustomersDetails />
					</Grid>
				</Route>
			</Switch>
			<Grid item xs={12} md={10}></Grid>
		</Grid>
	);
};

export default AdminCustomers;
