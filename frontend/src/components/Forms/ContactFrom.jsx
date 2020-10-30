import React from 'react';

// axios
import axios from 'axios';

// react hooks form
import { useForm } from 'react-hook-form';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// components

const useStyles = makeStyles((theme) => ({
	form: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	input: {
		width: '75%',
		padding: theme.spacing(2),
	},
	button: {
		color: theme.palette.grey.main,
		backgroundColor: theme.palette.primary.light,
		paddingLeft: '30px',
		paddingRight: '30px',
		marginTop: '10px',
		'&:active, &:hover': {
			backgroundColor: theme.palette.primary.dark,
		},
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
		<form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate>
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
			<Button variant="contained" type="submit" className={classes.button}>
				Send
			</Button>
		</form>
	);
};

export default Contact;
