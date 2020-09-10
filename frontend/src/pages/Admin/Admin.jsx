import React from 'react';

import { withAuthenticationRequired } from '@auth0/auth0-react';
import Logout from '../../components/Logout';
import CurrentRentals from '../../components/Tables/CurrentRentals';
import RecentSalesTable from '../../components/Tables/RecentSalesTable';
import Spinner from '../../UI/Spinner';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	// root: {
	// 	flexShrink: 3,
	// },
	table: {
		minWidth: 400,
	},
	section: {
		height: '300px',
	},
}));

const Admin = () => {
	const classes = useStyles();

	return (
		<Container maxWidth="xl">
			<Grid container spacing={2} justify="center">
				<Grid item xs={12} sm={5} component={Paper} className={classes.section}>
					<Typography variant="h4">rentals in progress</Typography>
					<CurrentRentals />
				</Grid>
				<Grid item xs={12} sm={5} component={Paper} className={classes.section}>
					<Typography variant="h4">recent sales</Typography>
					<RecentSalesTable />
				</Grid>
				<Grid item xs={12}>
					<Logout />
				</Grid>
			</Grid>
		</Container>
	);
};

export default withAuthenticationRequired(Admin, {
	onRedirecting: () => <Spinner />,
});
