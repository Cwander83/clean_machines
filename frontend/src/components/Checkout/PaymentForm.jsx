import React from 'react';

import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button'


import {
	CardNumberElement,
	CardExpiryElement,
	CardCvcElement,
	//useStripe,
	//useElements,
} from '@stripe/react-stripe-js';

const useStyles = makeStyles((theme) => ({
	form: {
    width: '100%',
    
	},
	stripe: {
    padding: theme.spacing(2),
    borderBottom: '1px solid grey'
	},
}));

export default function PaymentForm({prevStep, nextStep}) {
	const classes = useStyles();

	//const stripe = useStripe();
	//const elements = useElements();
	return (
		<React.Fragment>
			
			<Typography variant="h6" gutterBottom>
				Payment method
			</Typography>
			<form noValidate className={classes.form}>
				<Grid container spacing={3} justify="center">
					<Grid item xs={10}>
						<TextField
							required
							id="cardName"
							label="Name on card"
							fullWidth
							autoComplete="cc-name"
						/>
					</Grid>
					<Grid item xs={10}>
						<CardNumberElement className={classes.stripe} />
					</Grid>
					<Grid item xs={7}>
						<CardExpiryElement className={classes.stripe} />
					</Grid>
					<Grid item xs={3}>
						<CardCvcElement className={classes.stripe} />
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Button color="primary" variant="contained" type="submit" onClick={prevStep}>
						back
					</Button>
					<Button color="primary" variant="contained" type="submit" onClick={nextStep}>
						complete purchase
					</Button>
				</Grid>
			</form>
		</React.Fragment>
	);
}