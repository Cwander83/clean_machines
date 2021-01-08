import React from 'react';

// auth 0
import { useAuth0 } from '@auth0/auth0-react';

// react router
import { Link } from 'react-router-dom';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import Box from '@material-ui/core/Box';

// images / logos
//import Logo from '../assets/STAMPANDMARK/MARK/CleanMachineRentals_Mark-Camarone.png';
// import DrawerLogo from '../assets/SECONDARYLOGO/CleanMachineRentals_SecondaryLogo-GoldTips-Camarone.png';
import Logo from '../images/cleanmachinerentals_secondaryl.png';

// components
import HeaderNavigation from '../components/HeaderNavigation';
import ShoppingCartButton from '../components/Buttons/ShoppingCartButton';
import Logout from './Logout';
const useStyles = makeStyles((theme) => ({
	toolbar: {
		// maxWidth: '1232px',
		// margin: 'auto',
	},
	appBar: {
		backgroundColor: 'transparent',
		maxWidth: '1232px',
		boxShadow: 'none',
		margin: 'auto',
	},
	menu: {
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	menuIcon: {
		fontSize: '40px',
		color: theme.palette.gold.main,
	},
	menuLabel: {
		width: '50px',
		height: '50px',
		color: theme.palette.gold.main,
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
	},

	logo: {
		width: '8%',
		[theme.breakpoints.down('xs')]: {
			width: '60%',
		},
		[theme.breakpoints.down('sm')]: {
			width: '30%',
		},
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
	phone: {
		color: theme.palette.primary.light,
		marginLeft: '20px',
		marginRight: '4px',
	},
	email: {
		color: theme.palette.primary.light,
	},
	box: {
		marginLeft: 'auto',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		[theme.breakpoints.down('md')]: {
			marginRight: '30px',
		},
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
			text: 'Shop',
			icon: <ViewComfyIcon />,
			to: '/sales',
		},
		{
			text: 'Rentals',
			icon: <ViewComfyIcon />,
			to: '/rentals',
		},
		{
			text: 'Tutorials',
			icon: <VideoLibraryIcon />,
			to: '/Tutorials',
		},
		{
			text: 'Support',
			icon: <MailIcon />,
			to: '/contact',
		},
		{
			text: 'FAQ',
			icon: <ContactSupportIcon />,
			to: '/faq',
		},
	];
	const adminList = [
		{
			text: 'Admin Home',
			icon: <HomeIcon />,
			to: '/admin',
		},
		// {
		// 	text: 'Orders',
		// 	icon: <ArrowForwardIosIcon />,
		// 	to: '/admin/orders',
		// },
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
		{
			text: 'Products',
			icon: <ArrowForwardIosIcon />,
			to: '/admin/products',
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
						edge="start"
						onClick={handleDrawerOpen}
						aria-label="Menu"
						classes={{
							root: classes.menu,
							label: classes.menuLabel,
						}}
					>
						<MenuIcon
							classes={{
								root: classes.menuIcon,
							}}
						/>
					</IconButton>
					<HeaderNavigation />
					<Box className={classes.box}>
						<ShoppingCartButton />
						<IconButton
							size="small"
							href="tel:+6145065435"
							disableRipple
							disableFocusRipple
							disableTouchRipple
						>
							<PhoneIcon className={classes.phone} />
						</IconButton>
						<IconButton
							size="small"
							href="mailto:chriswandermail@gmail.com"
							disableRipple
							disableFocusRipple
							disableTouchRipple
						>
							<EmailIcon className={classes.email} />
						</IconButton>
					</Box>
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
						src={Logo}
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
									divider
								>
									{icon && <ListItemIcon>{icon}</ListItemIcon>}
									<ListItemText primary={text} />
								</ListItem>
							);
						})}
						<Logout />
					</List>
				)}
			</Drawer>
		</div>
	);
};

export default NavDrawer;
