import React from 'react';
//import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import RentalSearch from '../../components/RentalSearch';
//import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
//import Admin from '../Admin/Admin';

//import { Elements } from '@stripe/react-stripe-js';
//import { loadStripe } from '@stripe/stripe-js';

//import CheckoutForm from '../../components/Checkout/CheckoutForm';
import CompanyTimeline from '../../components/CompanyTimeLine';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
	root: {},
	title: {
		paddingTop: '10px',
		paddingBottom: '20px',
		float: 'left',
	},
});



const Home = () => {
	//const [checkout, setCheckout] = React.useState(false);
	const classes = useStyles();
	return (
		<Container className={classes.root} maxWidth="lg">
			<Grid container justify="center" spacing={2}>
				<Grid item xs={12}>
					<Typography variant="h2" component="h2" className={classes.title}>
						Welcome to clean machines
					</Typography>
				</Grid>
				<Grid item xs={12} sm={5}>
					<Typography variant="h4">about the company</Typography>
				</Grid>
				<Grid item xs={12} sm={5} component={Paper}>
					<Typography variant="h4">How to rent</Typography>
					<CompanyTimeline />
				</Grid>

				<RentalSearch />

				{/* <Button onClick={() => setCheckout(!checkout)}>open checkout</Button> */}
				{/* {checkout ? (
					<Elements stripe={stripePromise}>
						<CheckoutForm />
					</Elements>
				) : (
					<> </>
				)} */}
			</Grid>
		</Container>
	);
};

export default Home;

// TODO
// * LANDING
// * DESC OF COMPANY
// * HOW THE RENTALS WORK
// * SEARCH FOR RENTALS
// * SHOW TOP SELLING PRODUCT
// * DEMO VIDEOS
