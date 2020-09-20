import React from 'react';

import SalesTable from './SalesTable';

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

const AdminSales = () => {
	const classes = useStyles();
	return (
		<Grid container justify="center" className={classes.root}>
			<Grid item xs={12}>
				<Typography variant="h3">Sales</Typography>
			</Grid>
			<Grid item xs={12} md={10}>
				<SalesTable />
			</Grid>

			<Grid item xs={12} md={10}></Grid>
		</Grid>
	);
};

export default AdminSales;
