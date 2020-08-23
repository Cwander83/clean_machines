import React from 'react';

import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import SingleRental from '../../components/SingleRental';
import { RentalContext } from '../../context/rental-context';
import RentalStepper from './RentalStepper';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	title: {
		// padding: theme.spacing(1),
	},
	gallery: {},
	// productsContainer: {
	// 	border: '1px green solid'
	// },
}));

const Rentals = () => {
	const classes = useStyles();
	let { path } = useRouteMatch();
	const { availableProducts } = React.useContext(RentalContext);

	React.useEffect(() => {
		return () => {};
	}, [availableProducts]);

	return (
		<Container maxWidth="lg">
			<Grid container spacing={2}>
				<Grid item xs={12}></Grid>
				<Grid item xs={12}></Grid>
				<Grid item xs={12}>
					<Grid container justify="center">
						<Grid item xs={6}>
							<Typography variant="h4" component="h4" className={classes.title}>
								Rentals
							</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item sm></Grid>
				<Grid item xs={12} sm={8}>
					<RentalStepper />
				</Grid>
				<Grid item sm></Grid>

				<Switch>
					{/* where the products to rent will show up */}
					<Route exact path={path}>
						<Grid
							container
							spacing={2}
							justify="center"
							alignContent="center"
							className={classes.gallery}
							component={Paper}
						>
							{availableProducts.length !== 0 ? (
								availableProducts.map((obj, i) => {
									return (
										<React.Fragment key={obj.id}>
											<Grid item xs={12} className={classes.productsContainer}>
												<SingleRental product={obj} />
											</Grid>
										</React.Fragment>
									);
								})
							) : (
								<Typography variant="h5">coming soon</Typography>
							)}
						</Grid>
					</Route>
					{/* <Route
						path={`${path}/:id`}
						render={(routeProps) => <SingleRental {...routeProps} />}
					/> */}
				</Switch>
			</Grid>
		</Container>
	);
};

export default Rentals;
