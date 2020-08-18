import React from 'react';

import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import SingleRental from '../../components/SingleRental';
import RentalCard from '../../components/Cards/RentalCard';
import RentalSearch from '../../components/RentalSearch';
import LocationChecker from '../../components/LocationChecker';

import { RentalContext } from '../../context/rental-context';
import RentalStepper from './RentalStepper';
import { green } from '@material-ui/core/colors';
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
}));

const Rentals = () => {
	const classes = useStyles();
	let {
		path,
		// url
	} = useRouteMatch();
	const { availableProducts } = React.useContext(RentalContext);

	React.useEffect(() => {
		return () => {};
	}, [availableProducts]);

	//console.log(availableProducts);

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
				<Grid item xs={12}sm={6}>
					<RentalStepper />
				</Grid>
				<Grid item sm></Grid>
				{/* 
				<Grid item xs={12}>
					<LocationChecker />
				</Grid>
				<Grid item xs={12}>
					<RentalSearch />
				</Grid> */}

				<Switch>
					{/* where the products to rent will show up */}
					<Route exact path={path}>
						<Grid
							container
							spacing={2}
							justify="center"
							className={classes.gallery}
						>
							{availableProducts.length !== 0 ? (
								availableProducts.map((obj, i) => {
									return <RentalCard key={obj.id} product={obj} />;
								})
							) : (
								<Typography variant="h5">coming soon</Typography>
							)}
						</Grid>
					</Route>
					<Route
						path={`${path}/:id`}
						render={(routeProps) => <SingleRental {...routeProps} />}
					/>
				</Switch>
			</Grid>
		</Container>
	);
};

export default Rentals;
