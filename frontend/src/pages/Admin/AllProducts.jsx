import React from 'react';

import { makeStyles  } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


import AllProductsTable from '../../components/Tables/AllProductsTable'
import ProductsChanges from './ProductsChanges';


const useStyles = makeStyles((theme) => ({
	// root: {
	// 	flexShrink: 3,
	// },
	table: {
		minWidth: 400,
	},
}));

const AllProducts = React.memo(() => {
	const classes = useStyles();



	return (
		<Grid container justify="center" className={classes.root}>
			<Grid item xs={6}>
				<Typography variant="h3">Products</Typography>
			</Grid>
			<Grid item xs={11} sm={10}>
			<AllProductsTable/>
			</Grid>

			<Grid item xs={10}>
				<ProductsChanges />
			</Grid>
		</Grid>
	);
});

export default AllProducts;
