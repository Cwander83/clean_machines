import React from 'react';

//classnames
import ClassNames from 'classnames';

// react router
import { Link } from 'react-router-dom';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// components

// images / icons
import Logo from '../assets/STAMPANDMARK/STAMP/CleanMachineRentals_Stamp-White.png';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		height: 'auto',
		padding: '25px 0',

		backgroundColor: theme.palette.primary.light,
	},
	section: {
		display: 'flex',
		flexDirection: 'column',
	},
	button: {
		color: theme.palette.grey.main,
		paddingTop: '1px',
		paddingBottom: '1px',
		width: 'fit-content',
		margin: '0 auto',
	},
	text: {
		color: theme.palette.grey.main,
		paddingTop: '1px',
		paddingBottom: '1px',
		width: 'fit-content',
		margin: '0 auto',
		fontSize: '14px',
		lineHeight: '24.5px',
		textTransform: 'uppercase',
	},

	email: {
		color: theme.palette.gold.main,
		textDecoration: 'none',
	},
	phone: {
		textDecoration: 'none',
	},

	title: {
		marginBottom: '15px',

		[theme.breakpoints.down('xs')]: {
			marginTop: '20px',
		},
	},
	middleTitle: {
		marginBottom: '0',
	},
	adminLink: {
		marginLeft: '4px',
		color: 'black',
		textDecoration: 'underline',
		fontSize: '14px',
		textTransform: 'uppercase',
	},
	adminLinkTitle: {
		textDecoration: 'none',
		color: 'black',
	},
	adminGrid: {
		fontSize: '16px',
		[theme.breakpoints.down('sm')]: {
			marginTop: '0',
		},
	},
	firstAdminGrid: {
		[theme.breakpoints.down('sm')]: {
			marginTop: '20px',
		},
	},
	icon: {
		width: '120px',
		margin: 'auto',
	},
}));

const links = [
	{ title: 'Shop', path: '/sales' },
	{ title: 'Rentals', path: '/rentals' },
	{ title: 'Tutorials', path: '/videos' },
	{ title: 'Support', path: '/contact' },
	{ title: 'FAQ', path: '/faq' },
];

const Footer = () => {
	const classes = useStyles();

	return (
		<Grid
			container
			justify="center"
			component="footer"
			className={classes.root}
		>
			<Grid item xs={12} sm={3}>
				<Typography variant="h6" className={classes.title}>
					COMPANY
				</Typography>
				<Grid item xs={12} className={classes.section}>
					{links.map((link, i) => {
						return (
							<Button
								disableRipple
								disableFocusRipple
								disableTouchRipple
								key={i}
								component={Link}
								to={link.path}
								className={classes.button}
							>
								{link.title}
							</Button>
						);
					})}
				</Grid>
			</Grid>
			<Grid item xs={12} sm={3}>
				<Grid item xs={12} className={classes.section}>
					<img
						src={Logo}
						alt="Clean machines rental company"
						className={classes.icon}
					/>

					<Typography
						variant="h6"
						className={ClassNames(classes.email, classes.text)}
						component="a"
						href="mailto:hjmjanitorial@gmail.com"
					>
						hjmjanitorial@gmail.com
					</Typography>
					<Typography
						variant="h6"
						className={ClassNames(classes.phone, classes.text)}
						component="a"
						href="tel:+1-800-444-4444"
					>
						+1 800 444 4444
					</Typography>
				</Grid>
			</Grid>
			<Grid item xs={12} sm={3}>
				<Typography variant="h6" className={classes.title}>
					ADDRESS
				</Typography>
				<Grid item xs={12} className={classes.section}>
					<Typography
						variant="h6"
						className={ClassNames(classes.address, classes.text)}
					>
						8297 Champions Gate Blvd.
					</Typography>
					<Typography
						variant="h6"
						className={ClassNames(classes.address, classes.text)}
					>
						Unit No. 517
					</Typography>
					<Typography
						variant="h6"
						className={ClassNames(classes.address, classes.text)}
					>
						Champions Gate
					</Typography>
					<Typography
						variant="h6"
						className={ClassNames(classes.address, classes.text)}
					>
						Florida
					</Typography>
					<Typography
						variant="h6"
						className={ClassNames(classes.address, classes.text)}
					>
						33896
					</Typography>
				</Grid>
			</Grid>
			<Grid
				item
				xs={12}
				className={ClassNames(classes.firstAdminGrid, classes.adminGrid)}
			>
				<Typography
					variant="body1"
					display="inline"
					className={ClassNames(classes.text, classes.adminLinkTitle)}
				>
					admin dashboard click
				</Typography>
				<Typography
					className={ClassNames(classes.text, classes.adminLink)}
					variant="body1"
					display="inline"
					component={Link}
					to="/admin"
				>
					here
				</Typography>
			</Grid>
			<Grid item xs={12} className={classes.adminGrid}>
				<Typography
					variant="body1"
					display="inline"
					className={ClassNames(classes.text, classes.adminLinkTitle)}
				>
					&#169; 2020 Clean Machines Rental Company
				</Typography>
			</Grid>
			<Grid item xs={12} className={classes.adminGrid}>
				<Typography
					variant="body1"
					display="inline"
					className={ClassNames(classes.text, classes.adminLinkTitle)}
				>
					site by
				</Typography>
				<Typography
					className={ClassNames(classes.text, classes.adminLink)}
					variant="body1"
					display="inline"
					component="a"
					href="https://www.chriswander.com"
				>
					chris wander
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Footer;
