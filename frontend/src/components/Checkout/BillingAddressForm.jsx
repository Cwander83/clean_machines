import React, { useContext } from 'react';

// react hooks form
import { useForm, Controller } from 'react-hook-form';

// material ui
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

// context api
import { CartContext } from '../../context/cart-context.js';

// utils
import { states } from '../../utils/cart';

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
	arrowIcon: {
		fontSize: '16px',
		color: theme.palette.gold.main,
	},

	title: {
		padding: theme.spacing(2),
		letterSpacing: '.035em',
		textTransform: 'uppercase',
		color: theme.palette.gold.main,
		backgroundColor: theme.palette.primary.light,
	},
}));

export default function BillingAddressForm({ nextStep }) {
	const classes = useStyles();

	const { register, handleSubmit, errors, control } = useForm();

	const { setUser, user } = useContext(CartContext);

	const onSubmit = (data) => {
		if (data) {
			setUser(data);
			nextStep();
		}
	};

	return (
		<React.Fragment>
			<Typography className={classes.title} variant="h6" gutterBottom>
				Billing Address
			</Typography>

			<form
				className={classes.form}
				noValidate
				onSubmit={handleSubmit(onSubmit)}
			>
				<Grid container spacing={3}>
					<Grid item xs={12}>
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
					<Grid item xs={12} className={classes.buttons}>
						<Button
							variant="contained"
							type="submit"
							color="primary"
							className={classes.button}
						>
							next <ArrowForwardIcon className={classes.arrowIcon} />
						</Button>
					</Grid>
				</Grid>
			</form>
		</React.Fragment>
	);
}
