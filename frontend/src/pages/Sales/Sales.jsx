import React, { useState, memo, useEffect } from 'react';

// react router
import { Switch, Route, useRouteMatch } from 'react-router-dom';

// axios
import axios from 'axios';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// components
import SaleProduct from './SaleProduct';
import SideNav from './SideNav'
import MobileSideNav from './MobileSideNav'
import ProductGrid from './ProductGrid';



const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
		minHeight: 'calc(100vh - 30px)',
	},
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

	media: {
		height: 350,
		backgroundSize: 'contain',
	},
	content: {},
}));

const Sales = () => {
	const classes = useStyles();

	let { path } = useRouteMatch();

	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios('/products/sales');
			setProducts(result.data);
		};
		fetchData();
	}, []);
	console.log('sales home page');

	return (
		<Container maxWidth="xl" className={classes.root}>
			<Grid container>
				<Grid item xs={12}>
					<Typography variant="h3" className={classes.title}>
						Shop by Category
					</Typography>
				</Grid>

				<Switch>
					<Route exact path={path}>
						<Grid item xs sm={2}>
							<SideNav />
							<MobileSideNav />
						</Grid>
					
						<Grid item xs={12} sm={10}>
							<ProductGrid products={products} />
						</Grid>
					</Route>
					<Route path={`${path}/:id`}>
						<Grid item xs={12}>
							<SaleProduct />
						</Grid>
					</Route>
				</Switch>
			</Grid>
		</Container>
	);
};

export default memo(Sales);
