import React from 'react';

import { makeStyles,  } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


import AllProductsTable from '../../components/Tables/AllProductsTable'
import ProductsChanges from './ProductsChanges';


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
				<Typography variant="h3">Products</Typography>
			</Grid>
			<Grid item xs={12} md={10}>
			<AllProductsTable/>
			</Grid>

			<Grid item xs={12}>
				<ProductsChanges />
			</Grid>
		</Grid>
	);
});

export default AllProducts;
