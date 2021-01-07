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
import SalesTable from './SalesTable';
import UnShippedSales from './UnshippedSales';
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

const AdminSales = () => {
	const classes = useStyles();

	//let { url, path } = useRouteMatch();

	return (
		<Container maxWidth="xl" className={classes.root}>
			<Grid container justify="center" spacing={2}>
				<PageHeader title="Sales" />

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
				<Grid
					item
					xs={12}
					md={10}
					component={Paper}
					className={classes.section}
				>
					<AdminTableHeaders title="Sales History" />
					<SalesTable />
				</Grid>
			</Grid>
		</Container>
	);
};

export default AdminSales;
