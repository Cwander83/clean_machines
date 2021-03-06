import React from 'react';

// react router
// import {
// 	Switch,
// 	Route,
// 	Link,
// 	useRouteMatch,
// 	//useParams,
// } from 'react-router-dom';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

// components
import RentalsTable from './RentalsTable';
import CurrentRentals from './CurrentRentals';
import UpComingRentals from './UpComingRentals';
import PageHeader from '../../../components/PageHeader';
import AdminTableHeaders from '../AdminTableHeaders';

const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: '20px',
	},

	section: {
		height: 'auto',
		marginTop: '20px',
	},
}));

const AdminRentals = () => {
	const classes = useStyles();

	//let { path, url } = useRouteMatch();

	return (
		<Container maxWidth="xl" className={classes.root}>
			<Grid container spacing={2} justify="center">
				<PageHeader title="Rentals" />

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
				<Grid
					item
					xs={12}
					md={10}
					component={Paper}
					className={classes.section}
				>
					<AdminTableHeaders title="Rentals History" />
					<RentalsTable />
				</Grid>
			</Grid>
		</Container>
	);
};

export default AdminRentals;
