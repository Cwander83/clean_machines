import React, { memo } from 'react';

// react router
import { Switch, Route, useRouteMatch } from 'react-router-dom';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


// components
import SaleProduct from './SaleProduct';
import SideNav from './SideNav';
import ProductGrid from './ProductGrid';
import PageHeader from '../../components/PageHeader';
import Container from '../../containers/Container'

const useStyles = makeStyles((theme) => ({
	
	title: {
		fontFamily: 'Roboto Black',
		width: '100%',
		height: '200px',
		backgroundColor: theme.palette.primary.light,
		color: theme.palette.gold.main,
		fontSize: '60px',
		padding: 'auto',
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
	},
	productGrid: {
		marginTop: '15px',
		marginBottom: '15px',
	},
}));

const Sales = () => {
	const classes = useStyles();

	let { path } = useRouteMatch();
	console.log(path);

	return (
		<Container>
			<Grid container>
				<PageHeader title="Shop By Category" />
				<Grid item xs sm={2}>
					<SideNav />
				</Grid>

				<Switch>
					<Route exact path={path}>
						<Grid item xs={12} sm className={classes.productGrid}>
							<ProductGrid />
						</Grid>
					</Route>
					<Route path={`${path}/:id`}>
						<Grid item xs={12} sm={10}>
							<SaleProduct />
						</Grid>
					</Route>
				</Switch>
			</Grid>
		</Container>
	);
};

export default memo(Sales);
