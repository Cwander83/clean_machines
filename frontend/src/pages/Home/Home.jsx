import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import RentalSearch from '../../components/RentalSearch/RentalSearch';
//import Admin from '../Admin/Admin';

//import { Link } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CheckoutForm from '../../components/Stripe/CheckoutForm';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		height: '100px',
	},
	container: {
		height: '900px',
	},
});

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);
const Home = () => {
	const [checkout, setCheckout] = React.useState(false);
	const classes = useStyles();
	return (
		<div>
			<Container maxWidth="lg" className={classes.container}>
				<Typography variant="h2" component="h2">
					h1. Heading
				</Typography>
				<RentalSearch />
				<Button onClick={() => setCheckout(!checkout)}>open checkout</Button>
				{checkout ? (
					<Elements stripe={stripePromise}>
						<CheckoutForm />
					</Elements>
				) : (
					<> </>
				)}
			</Container>
		</div>
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
