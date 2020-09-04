import React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import { useForm, Controller } from 'react-hook-form';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { CartContext } from '../../context/cart-context.js';

const useStyles = makeStyles((theme) => ({
	form: {
		width: '100%',
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '100%',
		},
	},
	buttons: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	button: {
		marginTop: theme.spacing(3),
		marginLeft: theme.spacing(1),
	},
}));

export default function ShippingForm({ nextStep, prevStep }) {
	const classes = useStyles();
	const { register, handleSubmit, errors, control } = useForm();
	const { user, updateShipping } = React.useContext(CartContext);

	const onSubmit = (data) => {
		console.log(data);
		if (data) {
			updateShipping(data);
			nextStep();
		}
	};

	return (
		<React.Fragment>
			<Typography variant="h6" gutterBottom>
				Shipping Address
			</Typography>
			<Typography variant="h6">skip if only renting</Typography>
			<form
				className={classes.form}
				noValidate
				onSubmit={handleSubmit(onSubmit)}
			>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="firstName"
							name="shipping_firstName"
							label="First name"
							fullWidth
							autoComplete="given-name"
							error={!!errors.firstName}
							inputRef={register({ required: true })}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="lastName"
							name="shipping_lastName"
							label="Last name"
							fullWidth
							autoComplete="family-name"
							error={!!errors.lastName}
							inputRef={register({ required: true })}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							id="companyName"
							name="shipping_companyName"
							label="Company name"
							fullWidth
							autoComplete="company-name"
							inputRef={register}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="email"
							name="email"
							label="Email"
							fullWidth
							autoComplete="email"
							error={!!errors.email}
							inputRef={register({ required: true, pattern: /\S+@\S+\.\S+/ })}
						/>
						<p>{errors.email && 'not valid email'}</p>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="phone"
							name="phone"
							label="Phone Number"
							fullWidth
							autoComplete="phone"
							error={!!errors.phone}
							inputRef={register({ required: true })}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							id="address1"
							name="shipping_line1"
							label="Address line 1"
							fullWidth
							autoComplete="address-line1"
							error={!!errors.shipping_line1}
							inputRef={register({ required: true })}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							id="address2"
							name="shipping_line2"
							label="Address line 2"
							fullWidth
							autoComplete="shipping address-line2"
							inputRef={register}
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
							error={!!errors.shipping_city}
							inputRef={register({ required: true })}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<InputLabel id="select-state">State</InputLabel>
						<Controller
							as={
								<Select fullWidth required labelId="select-state">
									{states.map((state) => {
										return (
											<MenuItem key={state} value={state}>
												{state}
											</MenuItem>
										);
									})}
								</Select>
							}
							name="shipping_state"
							defaultValue={user.billing_state}
							control={control}
							inputRef={register}
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
							error={!!errors.shipping_postal_code}
							inputRef={register({
								required: true,
								pattern: /^\d{5}$|^\d{5}-\d{4}$/,
							})}
						/>
					</Grid>
					<Grid item xs={12} sm={6}></Grid>
					<Grid item xs={12}>
						<Button color="primary" variant="contained" onClick={prevStep}>
							back
						</Button>
						<Button color="primary" variant="contained" type="submit">
							Review order
						</Button>
						<Button color="primary" variant="contained" onClick={nextStep}>
							skip
						</Button>
					</Grid>
				</Grid>
			</form>
		</React.Fragment>
	);
}

const states = [
	'AL',
	'AK',
	'AS',
	'AZ',
	'AR',
	'CA',
	'CO',
	'CT',
	'DE',
	'DC',
	'FM',
	'FL',
	'GA',
	'GU',
	'HI',
	'ID',
	'IL',
	'IN',
	'IA',
	'KS',
	'KY',
	'LA',
	'ME',
	'MH',
	'MD',
	'MA',
	'MI',
	'MN',
	'MS',
	'MO',
	'MT',
	'NE',
	'NV',
	'NH',
	'NJ',
	'NM',
	'NY',
	'NC',
	'ND',
	'MP',
	'OH',
	'OK',
	'OR',
	'PW',
	'PA',
	'RI',
	'SC',
	'SD',
	'TN',
	'TX',
	'UT',
	'VT',
	'VA',
	'WA',
	'WV',
	'WI',
	'WY',
];
