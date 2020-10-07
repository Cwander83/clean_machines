import React from 'react';

// auth 0
//import { useAuth0 } from '@auth0/auth0-react';

// react router
//import { Link } from 'react-router-dom';

// material ui
import { makeStyles } from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';
//import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// components
import Login from './LoginButton';

// images / icons
//import Logo from '../assets/STAMPANDMARK/MARK/CleanMachineRentals_Mark-Camarone.png';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		height: 'auto',
		
		backgroundColor: theme.palette.primary.light,
		
		bottom: 0,
		
	},
}));
const Footer = () => {
	const classes = useStyles();

	return (
		<footer className={classes.root}>
			<Typography variant="h2"> Footer</Typography>
			<Login />
		</footer>
	);
};

export default Footer;
