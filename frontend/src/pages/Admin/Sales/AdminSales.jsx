import React from 'react';

// react router
import {
	Switch,
	Route,
	Link,
	useRouteMatch,
	//useParams,
} from 'react-router-dom';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// components
import SalesTable from './SalesTable';
import SalesDetails from './SalesDetails';
import SalesProductDetails from './SalesProductDetails';
import SalesProductsTable from './SalesProductTable';
import AdminCreateSalesProducts from './AdminCreateSalesProduct';

const useStyles = makeStyles((theme) => ({
	root: {
		flexShrink: 3,
	},
}));

const AdminSales = () => {
	const classes = useStyles();

	let { url, path } = useRouteMatch();
	return (
		<Grid container justify="center" className={classes.root}>
			<Grid item xs={12}>
				<Typography variant="h3">Sales</Typography>

				<Button component={Link} to={`${url}`}>
					Sales
				</Button>
				<Button component={Link} to={`${path}/products`}>
					Products
				</Button>
				<Button component={Link} to={`${path}/create`}>
					add Product
				</Button>
			</Grid>

			<Switch>
				<Route exact path={path}>
					<Grid item xs={12} md={10}>
						<SalesTable />
					</Grid>
				</Route>
				<Route path={`${path}/sales/:id`}>
					<SalesDetails />
				</Route>
				<Route path={`${path}/products`}>
					<Grid item xs={12} md={10}>
						<SalesProductsTable />
					</Grid>
				</Route>
				<Route path={`${path}/products/:id`}>
					<Grid item xs={12} md={10}>
						<SalesProductDetails />
					</Grid>
				</Route>
				<Route path={`${path}/create`}>
					<Grid item xs={10}>
						<Grid item xs={12}>
							<Typography variant="h3">Create Sales Product</Typography>
						</Grid>
						<AdminCreateSalesProducts />
					</Grid>
				</Route>
			</Switch>
		</Grid>
	);
};

export default AdminSales;
