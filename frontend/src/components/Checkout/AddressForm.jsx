import React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';

import { CartContext } from '../../context/cart-context.js';

const useStyles = makeStyles((theme) => ({
	form: {
		width: '100%',
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '100%',
		},
	},
}));

export default function AddressForm() {
	const classes = useStyles();
	const { updateUser } = React.useContext(CartContext);

	return (
		<React.Fragment>
			<Typography variant="h6" gutterBottom>
				Shipping address
			</Typography>
			<form className={classes.form} noValidate>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="firstName"
							name="firstName"
							label="First name"
							fullWidth
							autoComplete="given-name"
							onChange={(e) => updateUser(e)}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="lastName"
							name="lastName"
							label="Last name"
							fullWidth
							autoComplete="family-name"
							onChange={(e) => updateUser(e)}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							id="address1"
							name="shipping_line1"
							label="Address line 1"
							fullWidth
							autoComplete="shipping address-line1"
							onChange={(e) => updateUser(e)}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							id="address2"
							name="shipping_line2"
							label="Address line 2"
							fullWidth
							autoComplete="shipping address-line2"
							onChange={(e) => updateUser(e)}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="city"
							name="shipping_city"
							label="City"
							fullWidth
							autoComplete="shipping address-level2"
							onChange={(e) => updateUser(e)}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							id="state"
							name="shipping_state"
							label="State/Province/Region"
							fullWidth
							onChange={(e) => updateUser(e)}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="zip"
							name="shipping_postal_code"
							label="Zip / Postal code"
							fullWidth
							autoComplete="shipping postal-code"
							onChange={(e) => updateUser(e)}
						/>
					</Grid>
					<Grid item xs={12} sm={6}></Grid>
					<Grid item xs={12}></Grid>
				</Grid>
			</form>
		</React.Fragment>
	);
}
