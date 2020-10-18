import React, { memo, useContext } from 'react';

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
// import SaleProduct from './SaleProduct';
// import SideNav from './SideNav';
import RentalsGrid from './RentalsGrid';
import LocationChecker from '../../components/LocationChecker';

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
}));

const Rentals = () => {
	const classes = useStyles();

	let { path } = useRouteMatch();

	let { open, handleClose } = useContext(RentalContext);

	console.log('Rentals home page');

	return (
		<Container maxWidth="xl" className={classes.root}>
			<Grid container>
				<Grid item xs={12}>
					<Typography variant="h3" className={classes.title}>
						Rentals
					</Typography>
				</Grid>
				{/* <Grid item xs sm={2}>
					<SideNav />
				</Grid> */}

				<Switch>
					<Route exact path={path}>
						<Grid item xs={12} sm className={classes.productGrid}>
							<RentalsGrid />
						</Grid>
					</Route>
					{/* <Route path={`${path}/:id`}>
						<Grid item sm={1}></Grid>
						<Grid item xs={12} sm={9}>
							<SaleProduct />
						</Grid>
					</Route> */}
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
