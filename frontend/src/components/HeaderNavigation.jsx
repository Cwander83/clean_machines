import React from 'react';

// auth 0
import { useAuth0 } from '@auth0/auth0-react';

// react router
import { Link } from 'react-router-dom';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// components

// images / icons
import Logo from '../assets/STAMPANDMARK/MARK/CleanMachineRentals_Mark-Camarone.png';

const useStyles = makeStyles((theme) => ({
	root: {
		margin: 'auto',

		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},

	button: {
		marginRight: '5px',
		fontSize: '18px',
		letterSpacing: '.05em',
		'&:hover': {
			backgroundColor: 'transparent',
		},
	},
	icon: { width: '35px' },
}));
const HeaderNavigation = () => {
	const classes = useStyles();

	const { isAuthenticated, logout } = useAuth0();

	const links = [
		{ title: 'Shop', path: '/sales' },
		{ title: 'Rentals', path: '/rentals' },
		{ icon: Logo, path: '/' },
		{ title: 'Videos', path: '/videos' },
		{ title: 'faq', path: '/contact' },
	];

	const admin = [
		{ title: 'Sales', path: '/admin/sales' },
		{ title: 'Rentals', path: '/admin/rentals' },
		{ icon: Logo, path: '/admin' },
	
		{ title: 'Customers', path: '/admin/customers' },
		{ title: 'Logout', path: '/', logout: logout },
	];

	return (
		<div className={classes.root}>
			{!isAuthenticated
				? links.map((link, i) => {
						return (
							<Button
								disableRipple
								disableFocusRipple
								disableTouchRipple
								key={i}
								component={Link}
								to={link.path}
								className={classes.button}
								onClick={link.logout ? link.logout : null}
							>
								{link.icon ? (
									<img
										className={classes.icon}
										src={link.icon}
										alt="Clean Machines rentals"
									/>
								) : (
									link.title
								)}
							</Button>
						);
				  })
				: admin.map((link, i) => {
						return (
							<Button
								disableRipple
								disableFocusRipple
								disableTouchRipple
								key={i}
								component={Link}
								to={link.path}
								className={classes.button}
								onClick={link.logout ? link.logout : null}
							>
								{link.icon ? (
									<img
										className={classes.icon}
										src={link.icon}
										alt="Clean Machines rentals"
									/>
								) : (
									link.title
								)}
							</Button>
						);
				  })}
		</div>
	);
};

export default HeaderNavigation;
