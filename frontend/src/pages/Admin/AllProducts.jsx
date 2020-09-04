import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import AllProductsTable from '../../components/Tables/AllProductsTable';
import Button from '@material-ui/core/Button';

//import ProductsChanges from './ProductsChanges';
import ProductsTable from '../../components/Tables/ProductTable';
import EditTable from '../../components/Tables/EditTable';
import { AdminContext } from '../../context/admin-context';
import CreateProduct from './CreateProduct';

const useStyles = makeStyles((theme) => ({
	// root: {
	// 	flexShrink: 3,
	// },
	table: {
		minWidth: 400,
	},
}));

const AllProducts = React.memo(() => {
	const { editBtn, setCreateBtn } = React.useContext(AdminContext);
	const classes = useStyles();

	return (
		<Grid container justify="center" className={classes.root}>
			<Grid item xs={8}>
				<Typography variant="h3">Products</Typography>
				<Button onClick={() => setCreateBtn(true)}>Create product</Button>
			</Grid>
			<Grid item xs={11} sm={7}>
				<AllProductsTable />
			</Grid>
			<Grid item xs={11} sm={4}>
				{editBtn ? <EditTable /> : <ProductsTable />}
			</Grid>
			<CreateProduct />
			
		</Grid>
	);
});

export default AllProducts;
