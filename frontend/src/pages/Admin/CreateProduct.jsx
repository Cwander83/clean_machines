import React, { useState, memo } from 'react';

import { useForm, Controller } from 'react-hook-form';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';

import { AdminContext } from '../../context/admin-context';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	title: {
		textAlign: 'center',
	},

	button: {},
	form: {
		width: '100%',
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '100%',
		},
	},
}));

const CreateProduct = memo(() => {
	const { createBtn, setCreateBtn } = React.useContext(AdminContext);

	const classes = useStyles();

	//const [rental, setRental] = useState(false);

	const [success, setSuccess] = useState(false);
	const defaultValues = {
		rental: false,
	};

	const { register, handleSubmit, errors, control } = useForm({
		defaultValues,
	});
	const onSubmit = (data) => {
		console.log(data);

		fetch('/products', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		})
			.then(() => {
				setSuccess(true);
				console.log('Success product created!');
			})
			.catch((err) => console.log(err));
	};

	//console.log(rental);
	return (
		<div>
			<Dialog
				open={createBtn}
				onClose={() => setCreateBtn(false)}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{'Create Product'}</DialogTitle>
				<DialogContent>
					<Grid container spacing={2}>
						{!success ? (
							<>
								<form
									className={classes.form}
									noValidate
									onSubmit={handleSubmit(onSubmit)}
								>
									<Grid container spacing={2} justify="center">
										<Grid item xs={12} sm={12}>
											<Typography variant="h6">Main description</Typography>
											<Divider />
										</Grid>

										<Grid item xs={12} sm={5}>
											<TextField
												variant="standard"
												required
												label="name"
												name="name"
												error={!!errors.name}
												inputRef={register({ required: true })}
											/>
										</Grid>
										<Grid item xs={12} sm={5}>
											<TextField
												required
												name="model"
												variant="standard"
												label="model"
												error={!!errors.model}
												inputRef={register({ required: true })}
											/>
										</Grid>

										<Grid item xs={12} sm={10}>
											<TextField
												label="short description"
												name="short_description"
												error={!!errors.short_description}
												inputRef={register({ required: true })}
												required
											/>
										</Grid>
										<Grid item xs={12} sm={5}>
											<TextField
												required
												name="category"
												variant="standard"
												label="category"
												error={!!errors.category}
												inputRef={register({ required: true })}
											/>
										</Grid>
										<Grid item xs={12} sm={5}>
											<TextField
												name="sub_category"
												variant="standard"
												label="sub category"
												inputRef={register}
											/>
										</Grid>
										<Grid item xs={12} sm={12}>
											<Typography variant="h6">Pricing information</Typography>
											<Divider />
										</Grid>
										<Grid item xs={12} sm={5}>
											<TextField
												name="rental_day"
												variant="standard"
												label="rental price 1 day"
												inputRef={register}
											/>
										</Grid>
										<Grid item xs={12} sm={5}>
											<TextField
												name="rental_two_day"
												variant="standard"
												label="rental price 2 days"
												inputRef={register}
											/>
										</Grid>
										<Grid item xs={12} sm={5}>
											<TextField
												name="rental_week"
												variant="standard"
												label="rental price week"
												inputRef={register}
											/>
										</Grid>

										<Grid item xs={12} sm={5}>
											<InputLabel id="label">rental</InputLabel>
											<Controller
												as={
													<Select labelId="label" fullWidth>
														<MenuItem value={true}>YES</MenuItem>
														<MenuItem value={false}>NO</MenuItem>
													</Select>
												}
												name="rental"
												control={control}
											/>
										</Grid>

										<Grid item xs={12} sm={5}>
											<TextField
												name="sale_price"
												variant="standard"
												label="sale price"
												required
												error={!!errors.sale_price}
												inputRef={register({ required: true })}
											/>
										</Grid>
										<Grid item xs={12} sm={5}>
											<TextField
												name="units"
												variant="standard"
												label="# of units to sale"
												error={!!errors.units}
												inputRef={register({ required: true })}
											/>
										</Grid>

										<Grid item xs={12} sm={12}>
											<Typography variant="h6">Product Details</Typography>
											<Divider />
										</Grid>

										<Grid item xs={12} sm={5}>
											<TextField
												name="cord"
												label="power cord"
												variant="standard"
												inputRef={register}
											/>
										</Grid>
										<Grid item xs={12} sm={5}>
											<TextField
												name="weight"
												label="weight"
												variant="standard"
												inputRef={register}
											/>
										</Grid>
										<Grid item xs={12} sm={5}>
											<TextField
												name="height"
												label="height"
												variant="standard"
												inputRef={register}
											/>
										</Grid>
										<Grid item xs={12} sm={5}>
											<TextField
												name="width"
												label="width"
												variant="standard"
												inputRef={register}
											/>
										</Grid>
										<Grid item xs={12} sm={5}>
											<TextField
												name="motor"
												label="motor"
												variant="standard"
												inputRef={register}
											/>
										</Grid>
										<Grid item xs={12} sm={5}>
											<TextField
												name="sound_pressure"
												label="sound pressure"
												variant="standard"
												inputRef={register}
											/>
										</Grid>

										<Grid item xs={12} sm={5}>
											<TextField
												name="container_capacity"
												label="container capacity"
												variant="standard"
												inputRef={register}
											/>
										</Grid>
										<Grid item xs={12} sm={5}>
											<TextField
												name="tank_capacity"
												label="container capacity"
												variant="standard"
												inputRef={register}
											/>
										</Grid>
										<Grid item xs={12} sm={5}>
											<TextField
												name="speed"
												label="speed"
												variant="standard"
												inputRef={register}
											/>
										</Grid>
										<Grid item xs={12} sm={5}>
											<TextField
												name="size"
												label="size"
												variant="standard"
												inputRef={register}
											/>
										</Grid>

										<Grid item xs={12} sm={10}>
											<TextField
												name="feature_1"
												className={classes.featureInput}
												variant="standard"
												label="feature 1"
												inputRef={register}
											/>
										</Grid>
										<Grid item xs={12} sm={10}>
											<TextField
												name="feature_2"
												className={classes.featureInput}
												variant="standard"
												label="feature 2"
												inputRef={register}
											/>
										</Grid>
										<Grid item xs={12} sm={10}>
											<TextField
												name="feature_3"
												className={classes.featureInput}
												variant="standard"
												label="feature 3"
												inputRef={register}
											/>
										</Grid>
										<Grid item xs={12} sm={10}>
											<TextField
												name="feature_4"
												className={classes.featureInput}
												variant="standard"
												label="feature 4"
												inputRef={register}
											/>
										</Grid>
										<Grid item xs={12} sm={10}>
											<TextField
												name="feature_5"
												className={classes.featureInput}
												variant="standard"
												label="feature 5"
												inputRef={register}
											/>
										</Grid>
										<Grid item xs={12} sm={10}>
											<TextField
												name="tools"
												className={classes.featureInput}
												variant="standard"
												label="tools"
												inputRef={register}
											/>
										</Grid>
										<Grid container spacing={2} justify="center">
											<Grid item>
												<Button
													variant="outlined"
													type="submit"
													className={classes.title}
												>
													Submit
												</Button>
											</Grid>
										</Grid>
									</Grid>
								</form>
							</>
						) : (
							<Grid item xs={12}>
								<Typography variant="h2">Success! Product Created</Typography>
								<Button
									variant="contained"
									onClick={() => {
										setCreateBtn(false);
										setSuccess(false);
									}}
								>
									add more
								</Button>
							</Grid>
						)}
					</Grid>
				</DialogContent>
			</Dialog>
		</div>
	);
});

export default CreateProduct;
