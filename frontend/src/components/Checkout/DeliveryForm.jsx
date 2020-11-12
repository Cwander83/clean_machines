import React, { useContext, useState } from 'react';

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
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
}));

export default function DeliveryForm({ nextStep, prevStep }) {
	const classes = useStyles();

	const { register, handleSubmit, errors, control } = useForm();

	const { updateDelivery, user } = useContext(CartContext);
	const [checked, setChecked] = useState(false);

	const onSubmit = (data) => {
		console.log(data);
		if (data) {
			updateDelivery(data);
			nextStep();
		}
	};

	const handleChange = (event) => {
		setChecked(event.target.checked);
	};

	return (
		<React.Fragment>
			<Typography variant="h6" gutterBottom>
				Rental Delivery Address
			</Typography>
			<FormControlLabel
				control={
					<Checkbox
						checked={checked}
						onChange={handleChange}
						onClick={nextStep}
						inputProps={{ 'aria-label': 'primary checkbox' }}
					/>
				}
				label="check here if not renting"
			/>
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
							name="delivery_name"
							label="Name"
							fullWidth
							autoComplete="name"
							error={!!errors.delivery_name}
							inputRef={register({ required: true })}
						/>
					</Grid>
					{/* <Grid item xs={12}>
						<TextField
							id="companyName"
							name="delivery_company_name"
							label="Company name"
							fullWidth
							autoComplete="company-name"
							inputRef={register}
						/>
					</Grid> */}
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="email"
							name="delivery_email"
							label="Email"
							fullWidth
							autoComplete="email"
							error={!!errors.delivery_email}
							inputRef={register({ required: true, pattern: /\S+@\S+\.\S+/ })}
						/>
						<p>{errors.email && 'not valid email'}</p>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="phone"
							name="delivery_phone"
							label="Phone Number"
							fullWidth
							autoComplete="phone"
							error={!!errors.delivery_phone}
							inputRef={register({ required: true })}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							id="address1"
							name="delivery_line1"
							label="Address line 1"
							fullWidth
							autoComplete="address-line1"
							error={!!errors.delivery_line1}
							inputRef={register({ required: true })}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							id="address2"
							name="delivery_line2"
							label="Address line 2"
							fullWidth
							autoComplete="address-line2"
							inputRef={register}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="city"
							name="delivery_city"
							label="City"
							fullWidth
							autoComplete="address-city"
							error={!!errors.delivery_city}
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
							name="delivery_state"
							defaultValue={user.billing_state}
							control={control}
							inputRef={register}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="zip"
							name="delivery_postal_code"
							label="Zip / Postal code"
							fullWidth
							autoComplete="postal-code"
							error={!!errors.delivery_postal_code}
							inputRef={register({
								required: true,
								pattern: /^\d{5}$|^\d{5}-\d{4}$/,
							})}
						/>
					</Grid>
					<Grid item xs={12} sm={6}></Grid>
					<Grid item xs={12} className={classes.buttons}>
						<Button color="primary" variant="contained" onClick={prevStep}>
							back
						</Button>

						<Button
							color="primary"
							variant="contained"
							type="submit"
							style={{ marginLeft: '10px' }}
						>
							next
						</Button>
					</Grid>
				</Grid>
			</form>
		</React.Fragment>
	);
}
