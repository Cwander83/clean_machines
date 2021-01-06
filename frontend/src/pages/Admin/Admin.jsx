import React from 'react';

// auth 0
import { withAuthenticationRequired } from '@auth0/auth0-react';

// material ui
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

// components
//import Logout from '../../components/Logout';
import CurrentRentals from './CurrentRentals';
import RecentSalesTable from './RecentSalesTable';
import Spinner from '../../UI/Spinner';
import UpComingRentals from './Rentals/UpComingRentals';

const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: '20px',
	},
	table: {
		minWidth: 400,
	},
	section: {
		height: 'auto',
		marginTop: '20px',
	},
}));

const Admin = () => {
	const classes = useStyles();

	return (
		<Container maxWidth="xl" className={classes.root}>
			<Grid container spacing={2} justify="center">
				{/* active rentals */}
				<Grid item sm={1}></Grid>
				<Grid
					item
					xs={12}
					sm={10}
					component={Paper}
					className={classes.section}
				>
					<Typography variant="h4">Active Rentals</Typography>
					<CurrentRentals />
				</Grid>
				<Grid item sm={1}></Grid>
				{/* recent sales */}
			
	
				{/* future rentals */}
				<Grid item sm={1}></Grid>

				<Grid
					item
					xs={12}
					sm={10}
					component={Paper}
					className={classes.section}
				>
					<Typography variant="h4">Upcoming Rentals</Typography>
					<UpComingRentals />
				</Grid>
				<Grid item sm={1}></Grid>
		
	


				{/* <Grid item xs={12}>
					<Logout />
				</Grid> */}
			</Grid>
		</Container>
	);
};

export default withAuthenticationRequired(Admin, {
	onRedirecting: () => <Spinner />,
});
