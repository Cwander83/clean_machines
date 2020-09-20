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

export default function BillingAddressForm({ nextStep }) {
	const classes = useStyles();

	const { register, handleSubmit, errors, control } = useForm();

	const { updateUser, user } = React.useContext(CartContext);

	const onSubmit = (data) => {
		console.log(data);
		if (data) {
			updateUser(data);
			nextStep();
		}
	};

	return (
		<React.Fragment>
			<Typography variant="h6" gutterBottom>
				Billing Address
			</Typography>

			<form
				className={classes.form}
				noValidate
				onSubmit={handleSubmit(onSubmit)}
			>
				<Grid container spacing={3}>
					
					<Grid item xs={12} >
						<TextField
							required
							id="name"
							name="billing_name"
							label="Name"
							fullWidth
							defaultValue={user.billing_name}
							autoComplete="name"
							error={!!errors.billing_name}
							inputRef={register({ required: true })}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							id="company"
							name="billing_company_name"
							label="Company Name"
							fullWidth
							defaultValue={user.billing_company_name}
							autoComplete="company-name"
							inputRef={register}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="email"
							name="billing_email"
							label="Email"
							fullWidth
							autoComplete="email"
							defaultValue={user.billing_email}
							error={!!errors.billing_email}
							inputRef={register({ required: true, pattern: /\S+@\S+\.\S+/ })}
						/>
						<p>{errors.email && 'not valid email'}</p>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="phone"
							name="billing_phone"
							label="Phone Number"
							fullWidth
							autoComplete="phone"
							error={!!errors.billing_phone}
							defaultValue={user.billing_phone}
							inputRef={register({ required: true })}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							id="address1"
							name="billing_line1"
							label="Address line 1"
							fullWidth
							defaultValue={user.billing_line1}
							autoComplete="address-line1"
							error={!!errors.billing_line1}
							inputRef={register({ required: true })}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							id="address2"
							name="billing_line2"
							label="Address line 2"
							fullWidth
							defaultValue={user.billing_line2}
							autoComplete="address-line2"
							inputRef={register}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="city"
							name="billing_city"
							label="City"
							fullWidth
							defaultValue={user.billing_city}
							autoComplete="address-level2"
							error={!!errors.billing_city}
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
							name="billing_state"
							defaultValue={'FL'}
							control={control}
							inputRef={register}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="zip"
							name="billing_postal_code"
							label="Zip / Postal code"
							fullWidth
							autoComplete="postal-code"
							defaultValue={user.billing_postal_code}
							error={!!errors.billing_postal_code}
							inputRef={register({
								required: true,
								pattern: /^\d{5}$|^\d{5}-\d{4}$/,
							})}
						/>
					</Grid>
					<Grid item xs={12} sm={6}></Grid>
					<Grid item xs={12}>
						<Button color="primary" variant="contained" type="submit">
							next
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