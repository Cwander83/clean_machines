import React from 'react';

import { makeStyles,  } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


import RentalsTable from '../../components/Tables/RentalsTable'



const useStyles2 = makeStyles((theme) => ({
	root: {
		flexShrink: 3,
	},
	table: {
		minWidth: 400,
	},
}));

const AllProducts = React.memo(() => {
	const classes = useStyles2();



	return (
		<Grid container spacing={2} justify="center" className={classes.root}>
			<Grid item xs={12}>
				<Typography variant="h3">Rentals</Typography>
			</Grid>
			<Grid item xs={12} md={10}>
			<RentalsTable />
			</Grid>

			<Grid item xs={12} md={10}>
			
			</Grid>
		</Grid>
	);
});

export default AllProducts;
