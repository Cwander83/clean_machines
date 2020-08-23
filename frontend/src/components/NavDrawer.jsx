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
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
	button: {},
	root: {
		display: 'flex',
	},
});

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
			icon: <ViewComfyIcon />,
			to: '/videos',
		},
		{
			text: 'Contact',
			icon: <ViewComfyIcon />,
			to: '/contact',
		},
		{
			text: 'Admin',
			icon: <ViewComfyIcon />,
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
			icon: <HomeIcon />,
			to: '/admin/customers',
		},

		{
			text: 'All Products',
			icon: <ViewComfyIcon />,
			to: '/admin/products',
		},
		{
			text: 'Rentals',
			icon: <ViewComfyIcon />,
			to: '/admin/rentals',
		},
		{
			text: 'Sales',
			icon: <ViewComfyIcon />,
			to: '/admin/sales',
		},
	];

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						onClick={handleDrawerOpen}
						aria-label="Menu"
						color="inherit"
						variant="outlined"
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h3" color="inherit"></Typography>
					<IconButton color="inherit" component={Link} to="/cart">
						<ShoppingCartIcon />
						cart
					</IconButton>
				</Toolbar>
			</AppBar>
			<Drawer onClose={handleDrawerClose} open={state}>
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
								>
									{icon && <ListItemIcon>{icon}</ListItemIcon>}
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
