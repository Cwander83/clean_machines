import React from 'react';

import {
	Switch,
	Route,
	Link,
	useRouteMatch,
	//useParams,
} from 'react-router-dom';

import CustomersTable from '../../components/Tables/CustomersTable';
import CustomersDetails from '../../components/CustomersDetails';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		flexShrink: 3,
	},
	table: {
		minWidth: 400,
	},
}));

const AdminCustomers = () => {
	const classes = useStyles();

	let { path, url } = useRouteMatch();

	return (
		<Grid container justify="center" className={classes.root}>
			<Grid item xs={12}>
				<Typography variant="h3">Customers</Typography>
				
			</Grid>
			<Switch>
				<Route exact path={path}>
					<Grid item xs={12} md={10}>
						<CustomersTable />
					</Grid>
				</Route>
				<Route path={`${path}/:id`}>
					<CustomersDetails />
				</Route>
			</Switch>
			<Grid item xs={12} md={10}></Grid>
		</Grid>
	);
};

export default AdminCustomers;
