import React, { memo, useContext } from 'react';

// moment
import moment from 'moment';

// react router
import { Switch, Route, useRouteMatch } from 'react-router-dom';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
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
import LocationChecker from '../../components/LocationChecker';
import RentalProduct from './RentalProduct';
import RentalSearch from '../../components/RentalSearch';

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
	productGrid: {
		marginTop: '15px',
		marginBottom: '15px',
	},
	description: {
		padding: '30px 40px',
		textAlign: 'left',
		fontStyle: 'italic',
		fontSize: '16px',
		fontWeight: '500',
		letterSpacing: '0.1em',
	},
}));

const Rentals = () => {
	const classes = useStyles();

	let { path } = useRouteMatch();

	let { open, handleClose, rentalDates } = useContext(RentalContext);

	console.log('Rentals home page');

	return (
		<Container maxWidth="xl" className={classes.root}>
			<Grid container>
				<Grid item xs={12}>
					<Typography variant="h3" className={classes.title}>
						Rentals
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Grid container className={classes.body}>
						<Grid item md={2}></Grid>
						<Grid item xs={12} md={8}>
							<Typography variant="body1" className={classes.description}>
								We are Central Florida Based Rental company. we deliver the
								rental on start date by noon. and pick up the rental at the end
								of the rental. no need to worry about anything but enjoying the
								great products we offer.
							</Typography>
						</Grid>
						<Grid item md={2}></Grid>
						<Grid item md={2}></Grid>
						<Grid item md={10}>
							<RentalSearch show={false} />
						</Grid>
						<Grid item md={2}></Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="h5" className={classes.dateRange}></Typography>
					Rentals Available for
					{!rentalDates.startDate
						? '______'
						: moment(rentalDates.startDate).format('YYYY-MM-DD')}
					to{' '}
					{!rentalDates.endDate
						? '______'
						: moment(rentalDates.endDate).format('YYYY-MM-DD')}
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
				maxWidth="md"
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
						We only rent in the central florida area. Check here if we service
						your area.
					</DialogContentText>
					<LocationChecker />
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
