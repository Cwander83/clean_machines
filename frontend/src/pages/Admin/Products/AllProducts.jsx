import React from 'react';

// react router
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// components
import AllProductsTable from './AllProductsTable'; 
//import ProductsChanges from './ProductsChanges';
import ProductsTable from './ProductTable';
import EditTable from './EditTable';
//import CreateProduct from './CreateProduct';

// context api
import { AdminContext } from '../../../context/admin-context';

const useStyles = makeStyles((theme) => ({
	// root: {
	// 	flexShrink: 3,
	// },
	table: {
		minWidth: 400,
	},
}));

const AllProducts = () => {
	const classes = useStyles();
	// context
	const { editBtn, setCreateBtn } = React.useContext(AdminContext);

	let { path,url} = useRouteMatch();


	return (
		<Grid container justify="center" className={classes.root}>
			<Grid item xs={8}>
				<Typography variant="h3">Products</Typography>
				<Button >sale Products</Button>
				<Button >Rental Products</Button>
				<Button >add product</Button>
				<Button >add rental</Button>
			</Grid>

			<Grid item xs={11} sm={7}>
				<AllProductsTable />
			</Grid>
			<Grid item xs={11} sm={4}>
				{editBtn ? <EditTable /> : <ProductsTable />}
			</Grid>
			{/* <CreateProduct /> */}

			<Switch>
			
			</Switch>
		</Grid>
	);
};

export default AllProducts;
