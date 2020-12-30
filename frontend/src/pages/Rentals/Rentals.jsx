import React, { memo, useContext } from 'react';

// react router
import { Switch, Route, useRouteMatch } from 'react-router-dom';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

// context
import { RentalContext } from '../../context/rental-context';

// components
import RentalsGrid from './RentalsGrid';
//import LocationChecker from '../../components/LocationChecker';
import RentalProduct from './RentalProduct';
import PageHeader from '../../components/PageHeader';
import Container from '../../containers/Container';

import GoogleImage from '../../images/google-maps-central-fl.jpg';

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
	image: {
		width: '100%',
	},
	phone: {
		textDecoration: 'underline',
	},
}));

const Rentals = () => {
	const classes = useStyles();

	let { path } = useRouteMatch();

	let { open, handleClose } = useContext(RentalContext);

	//console.log('Rentals home page');

	return (
		<Container>
			<Grid container>
				<Grid item xs={12}>
					<PageHeader title="Rentals" />
				</Grid>

				<Switch>
					<Route exact path={path}>
						<Grid item xs={12} sm className={classes.productGrid}>
							<RentalsGrid />
						</Grid>
					</Route>
					<Route path={`${path}/:id`}>
						<Grid item sm={1}></Grid>
						<Grid item xs={12} sm={10}>
							<RentalProduct />
						</Grid>
						<Grid item sm={1}></Grid>
					</Route>
				</Switch>
			</Grid>
			<Dialog
				maxWidth="sm"
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{'Are you in the Central Florida Area?'}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						<Typography variant="h6" color="secondary">
							* Notice:{' '}
						</Typography>
						<Typography variant="h6">
							At this time we only rent in the Central Florida Area.
						</Typography>
						<Typography
							color="secondary"
							className={classes.phone}
							variant="h6"
							component="a"
							href="tel:+1-800-444-4444"
							display="inline"
						>
							Call here
						</Typography>{' '}
						<Typography  variant="h6" display="inline">
							if we service your area.
						</Typography>
					</DialogContentText>
					<img src={GoogleImage} alt="map" className={classes.image} />
					{/* <LocationChecker /> */}
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary" autoFocus>
						I understand
					</Button>
				</DialogActions>
			</Dialog>
		</Container>
	);
};

export default memo(Rentals);
