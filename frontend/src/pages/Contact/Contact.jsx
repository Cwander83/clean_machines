import React from 'react';

// material ui
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// components
import Container from '../../containers/Container';
import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/Forms/ContactFrom';

const useStyles = makeStyles((theme) => ({
	
	messageTitle: {},
}));

const Contact = () => {
	const classes = useStyles();

	return (
		<Container>
			<Grid container spacing={2}>
				<PageHeader title="General Support" />

				<Grid item xs={12}>
					<Typography variant="h6" display="inline"></Typography>
				</Grid>
				<Grid item sm={2}></Grid>
				<Grid item xs={12} sm={8}>
					<Typography
						gutterBottom
						variant="h4"
						align="left"
						className={classes.messageTitle}
					>
						Send us a Email
					</Typography>
					<Typography
						gutterBottom
						variant="body1"
						align="left"
						className={classes.message}
					>
						If you’d like further information about Clean Machine Rentals and
						you can’t find it in our FAQs, please get in touch. Simply fill out
						the form, include your message, and we’ll get back to you as soon as
						we can.
					</Typography>
				</Grid>
				<Grid item sm={2}></Grid>
				<Grid item sm={1}></Grid>
				<Grid item xs={12} sm={10}>
					<ContactForm />
				</Grid>
				<Grid item sm={1}></Grid>
			</Grid>
		</Container>
	);
};

export default Contact;
