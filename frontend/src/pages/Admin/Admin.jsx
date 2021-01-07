import React from 'react';

// auth 0
import { withAuthenticationRequired } from '@auth0/auth0-react';

// material ui
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';

// components
import CurrentRentals from './Rentals/CurrentRentals';
import UnShippedSales from './Sales/UnshippedSales';
import Spinner from '../../UI/Spinner';
import UpComingRentals from './Rentals/UpComingRentals';
import PageHeader from '../../components/PageHeader';
import AdminTableHeaders from './AdminTableHeaders';

const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: '20px',
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
				<PageHeader title="Dashboard" />
				{/* active rentals */}

				<Grid
					item
					xs={12}
					md={10}
					component={Paper}
					className={classes.section}
				>
					<AdminTableHeaders title="Active Rentals" />
					<CurrentRentals />
				</Grid>

				{/* future rentals */}

				<Grid
					item
					xs={12}
					md={10}
					component={Paper}
					className={classes.section}
				>
					<AdminTableHeaders title="Upcoming Rentals" />
					<UpComingRentals />
				</Grid>

				{/* recent sales */}

				<Grid
					item
					xs={12}
					md={10}
					component={Paper}
					className={classes.section}
				>
					<AdminTableHeaders title="Unshipped Sales" />
					<UnShippedSales />
				</Grid>
			</Grid>
		</Container>
	);
};

export default withAuthenticationRequired(Admin, {
	onRedirecting: () => <Spinner />,
});
