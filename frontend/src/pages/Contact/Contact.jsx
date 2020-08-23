import React from 'react';

import axios from 'axios';

import { useForm } from 'react-hook-form';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
	},
	form: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	input: {
		width: '50%',
		padding: theme.spacing(2),
	},
}));

const Contact = () => {
	const classes = useStyles();

	const { register, handleSubmit, errors } = useForm();

	const onSubmit = (data, e) => {
		e.preventDefault();
		axios({
			method: 'POST',
			url: '/mail/send',
			data: data,
		})
			.then((response) => {
				if (response.data.status === 'success') console.log('email sent');
				if (response.data.status === 'fail')
					console.log('email failed to send', response.data.status);
			})
			.catch((err) => console.error(err));
	};

	return (
		<Container maxWidth="lg" className={classes.root}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography variant="h4">General contact</Typography>
				</Grid>
				<Grid item sm={2}></Grid>
				<Grid item xs={12} sm={8} component={Paper}>
					<form
						className={classes.form}
						onSubmit={handleSubmit(onSubmit)}
						noValidate
					>
						<TextField
							className={classes.input}
							required
							name="name"
							label="Name"
							type="text"
							fullWidth
							error={!!errors.name}
							inputRef={register({ required: true })}
						/>

						<TextField
							className={classes.input}
							required
							name="email"
							label="Email"
							type="email"
							autoComplete="email"
							error={!!errors.email}
							inputRef={register({ required: true, pattern: /\S+@\S+\.\S+/ })}
							fullWidth
						/>
						<p>{errors.email?.type === 'pattern' && 'not valid email'}</p>
						<TextField
							className={classes.input}
							fullWidth
							name="phone"
							label="Phone Number"
							type="text"
							error={!!errors.phone}
							inputRef={register}
						/>
						<TextField
							className={classes.input}
							fullWidth
							required
							multiline
							rows={4}
							name="message"
							label="Message"
							type="text"
							error={!!errors.message}
							inputRef={register({ required: true })}
						/>
						<Button variant="contained" type="submit">
							Send
						</Button>
					</form>
				</Grid>
				<Grid item sm={2}></Grid>
			</Grid>
		</Container>
	);
};

export default Contact;
