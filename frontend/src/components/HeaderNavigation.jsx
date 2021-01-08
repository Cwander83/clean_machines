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
import Logo from '../images/cleanmachinerentals_secondaryl.png';

const useStyles = makeStyles((theme) => ({
	root: {
		margin: 'auto',
		marginLeft: 0,

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
	icon: { height: '75px' },
}));

const HeaderNavigation = () => {
	const classes = useStyles();

	const { isAuthenticated, logout } = useAuth0();

	const links = [
		{ icon: Logo, path: '/' },
		{ title: 'Shop', path: '/sales' },
		{ title: 'Rentals', path: '/rentals' },
		{ title: 'Tutorials', path: '/tutorials' },
		{ title: 'Support', path: '/contact' },
		{ title: 'FAQ', path: '/faq' },
	];

	const admin = [
		{ icon: Logo, path: '/admin' },
		// { title: 'Orders', path: '/admin/Orders' },
		{ title: 'Sales', path: '/admin/sales' },
		{ title: 'Rentals', path: '/admin/rentals' },
		{ title: 'Products', path: '/admin/products' },
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
