import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import { SalesContext } from '../../context/sales-context';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
//import Button from '@material-ui/core/Button';

import picture from '../../images/BGFS5000.jpg';

import SaleProduct from './SaleProduct';

const useStyles = makeStyles((theme) => ({
	title: {
		color: 'black',
	},
	image: {
		maxHeight: '300px',
	},
}));

const Sales = () => {
	const classes = useStyles();

	let { path } = useRouteMatch();

	const { availableProducts, getAvailableProducts } = React.useContext(
		SalesContext
	);

	React.useEffect(() => {
		getAvailableProducts();
	}, [getAvailableProducts]);

	//console.log(availableProducts);

	return (
		<Container>
			<Grid container spacing={4}>
				<Grid item xs={12}>
					<Typography variant="h3" className={classes.title}>
						Sales
					</Typography>
				</Grid>

				<Switch>
					<Route exact path={path}>
						{availableProducts &&
							availableProducts.map((product) => {
								return (
									<Grid item key={product.id} xs={12} sm={6} md={3}>
										<Link
											to={{
												pathname: `/sales/${product.id}`,
												state: { products: product },
											}}
										>
											<img
												src={picture}
												alt="model"
												className={classes.image}
											/>
											<Typography variant="h5">{product.model}</Typography>
										</Link>
									</Grid>
								);
							})}
					</Route>
					<Route
						path={`${path}/:id?`}
						render={(routeProps) => <SaleProduct {...routeProps} />}
					/>
				</Switch>
			</Grid>
		</Container>
	);
};

export default Sales;
