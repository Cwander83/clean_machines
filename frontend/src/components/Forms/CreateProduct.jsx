import React, { useState } from 'react';

import { useForm, Controller } from 'react-hook-form';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import { InputLabel, MenuItem } from '@material-ui/core';

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

const categories = [
	{ title: 'Upright', value: 'upright' },
	{ title: 'Backpack', value: 'backpack' },
	{ title: 'Canister', value: 'canister' },
	{ title: 'Extra-Wide', value: 'extra-wide' },
	{ title: 'Sweeper', value: 'sweeper' },
	{ title: 'Power Sweeper', value: 'power-sweeper' },
	{ title: 'Extractor', value: 'extractor' },
	{
		title: 'Air Movers',
		value: 'air-mover',
	},
	{ title: 'Steam Machines', value: 'steam-machine' },
	{ title: 'Cleaning Formula', value: 'formula' },
	{ title: 'Accessories', value: 'accessories' },
];

const CreateProduct = ({ inputs, product, method, path }) => {
	const classes = useStyles();

	const [success, setSuccess] = useState(false);

	const { register, handleSubmit, errors, control } = useForm();
	const onSubmit = (data) => {
		console.log('created data: ' + data);

		fetch(`${path}`, {
			method: method,
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		})
			.then(() => {
				setSuccess(true);

				console.log('Success product created!');
			})
			.catch((err) => console.log(err));
	};

	return (
		<Grid container>
			{!success ? (
				<form
					className={classes.form}
					noValidate
					onSubmit={handleSubmit(onSubmit)}
				>
					<Grid container spacing={2} justify="flex-start">
						<Grid item xs={12}>
							<InputLabel id="select">Category</InputLabel>
							<Controller
								control={control}
								name="category"
								as={
									<Select
										variant="standard"
										displayEmpty
										fullWidth
										labelId="select"
										inputRef={register({ required: true })}
										required
									>
										{categories.map((el, i) => {
											return (
												<MenuItem key={i} value={el.value}>
													{el.title}
												</MenuItem>
											);
										})}
									</Select>
								}
							/>
						</Grid>
						{inputs.map((input, i) => {
							return (
								<Grid item xs={input.xs} sm={input.sm} key={i}>
									<TextField
										autoComplete="off"
										variant="standard"
										label={input.label}
										name={input.name}
										error={!!errors.name}
										required={input.required ? true : false}
										inputRef={
											input.required ? register({ required: true }) : register
										}
									/>
								</Grid>
							);
						})}
						<Grid item xs={12}>
							<Button variant="outlined" type="submit">
								submit
							</Button>
						</Grid>
					</Grid>
				</form>
			) : (
				<Grid item xs={12}>
					<Typography variant="h2">Success! Product Created</Typography>
					<Button
						variant="contained"
						onClick={() => {
							//setCreateBtn(false);
							setSuccess(false);
						}}
					>
						add more
					</Button>
				</Grid>
			)}
		</Grid>
	);
};

export default CreateProduct;
