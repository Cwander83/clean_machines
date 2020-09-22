import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
//import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
//import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import { Link } from 'react-router-dom';

import ShoppingCartButton from '../components/Buttons/ShoppingCartButton';

import Logo from '../assets/LOGO/CleanMachineRentals_Logo-Camarone-GoldTips.png';
import DrawerLogo from '../assets/SECONDARYLOGO/CleanMachineRentals_SecondaryLogo-GoldTips-Camarone.png';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
	toolbar: {},
	appBar: {
		backgroundColor: 'transparent',
		boxShadow: 'none',
	},
	menuIcon: {
		fontSize: '40px',
		color: theme.palette.primary.main,
	},
	menuLabel: {
		width: '60px',
		height: '60px',
		//backgroundColor: theme.palette.gold.main,
	},

	list: {
		width: 250,
		//backgroundColor: theme.palette.grey.main,
	},
	fullList: {
		width: 'auto',
	},
	button: {},
	ShoppingCartIcon: {
		margin: '0 5% 0 auto',
		padding: '5px 40px',
	},
	cartBox: {
		margin: '0 5% 0 auto',

		backgroundColor: theme.palette.gold.main,
	},

	root: {
		display: 'flex',
		//backgroundColor: 'transparent'
	},

	logo: {
		width: '270px',
	},
	drawerLogoBox: {
		width: 'auto',
		height: '200px',
		backgroundColor: 'white',
		boxShadow:
			'0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	drawerLogo: {
		width: '240px',
		margin: 'auto',
	},
	drawerBody: {
		backgroundColor: theme.palette.primary.main,
	},
	navIcons: {
		color: theme.palette.gold.main,
	},
	divider: {
		color: theme.palette.gold.main,
	},
	listItem: {
		color: theme.palette.grey.main,
	},
}));

const NavDrawer = () => {
	const { isAuthenticated } = useAuth0();

	const classes = useStyles();
	const [state, setState] = React.useState(false);

	const handleDrawerOpen = () => {
		setState(true);
	};
	const handleDrawerClose = () => {
		setState(false);
	};

	const itemsList = [
		{
			text: 'Home',
			icon: <HomeIcon />,
			to: '/',
		},

		{
			text: 'Rentals',
			icon: <ViewComfyIcon />,
			to: '/rentals',
		},
		{
			text: 'Sales',
			icon: <ViewComfyIcon />,
			to: '/sales',
		},
		{
			text: 'How to Videos',
			icon: <VideoLibraryIcon />,
			to: '/videos',
		},
		{
			text: 'Contact',
			icon: <MailIcon />,
			to: '/contact',
		},
		{
			text: 'Admin',
			icon: <SupervisorAccountIcon />,
			to: '/admin',
		},
	];
	const adminList = [
		{
			text: 'Admin Home',
			icon: <HomeIcon />,
			to: '/admin',
		},
		{
			text: 'Customers',
			icon: <ArrowForwardIosIcon />,
			to: '/admin/customers',
		},

		{
			text: 'All Products',
			icon: <ArrowForwardIosIcon />,
			to: '/admin/products',
		},
		{
			text: 'Rentals',
			icon: <ArrowForwardIosIcon />,
			to: '/admin/rentals',
		},
		{
			text: 'Sales',
			icon: <ArrowForwardIosIcon />,
			to: '/admin/sales',
		},
	];

	return (
		<div className={classes.root}>
			<AppBar
				position="static"
				classes={{
					root: classes.appBar,
				}}
			>
				<Toolbar className={classes.toolbar}>
					<IconButton
						onClick={handleDrawerOpen}
						aria-label="Menu"
						classes={{
							label: classes.menuLabel,
						}}
					>
						<MenuIcon
							classes={{
								root: classes.menuIcon,
							}}
						/>
					</IconButton>
					<img
						className={classes.logo}
						src={Logo}
						alt="clean machines rentals"
					/>

					<ShoppingCartButton />
				</Toolbar>
			</AppBar>

			<Drawer
				onClose={handleDrawerClose}
				open={state}
				classes={{
					paper: classes.drawerBody,
				}}
			>
				<div className={classes.drawerLogoBox}>
					<img
						className={classes.drawerLogo}
						src={DrawerLogo}
						alt="clean machines rentals"
					/>
				</div>

				{!isAuthenticated ? (
					<List className={classes.list}>
						{itemsList.map((item, index) => {
							const { text, icon, to } = item;
							return (
								<ListItem
									component={Link}
									to={to}
									button
									key={index}
									onClick={handleDrawerClose}
									divider
									classes={{
										root: classes.listItem,
										divider: classes.divider,
									}}
								>
									{icon && (
										<ListItemIcon className={classes.navIcons}>
											{icon}
										</ListItemIcon>
									)}
									<ListItemText primary={text} />
								</ListItem>
							);
						})}
					</List>
				) : (
					<List className={classes.list}>
						{adminList.map((item, index) => {
							const { text, icon, to } = item;
							return (
								<ListItem
									component={Link}
									to={to}
									button
									key={index}
									onClick={handleDrawerClose}
									divider="true"
								>
									{icon && <ListItemIcon>{icon}</ListItemIcon>}
									<ListItemText primary={text} />
								</ListItem>
							);
						})}
					</List>
				)}
			</Drawer>
		</div>
	);
};

export default NavDrawer;
