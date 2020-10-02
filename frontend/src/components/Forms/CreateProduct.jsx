import React, { useState } from 'react';

import { useForm } from 'react-hook-form';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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

const CreateProduct = ({ inputs, product, method, path,  }) => {
	const classes = useStyles();

	const [success, setSuccess] = useState(false);

	const { register, handleSubmit, errors } = useForm();
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
					<>
						<form
							className={classes.form}
							noValidate
							onSubmit={handleSubmit(onSubmit)}
						>
							<Grid container spacing={2} justify="flex-start">
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
													input.required
														? register({ required: true })
														: register
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
					</>
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
