import React, { useState, memo } from 'react';

// react router
//import { Switch, Route, useRouteMatch } from 'react-router-dom';

// material ui
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles((theme) => ({
	nested: {
		paddingLeft: theme.spacing(4),
	},
	list: {
		//padding: '5px',
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
}));

const MobileSideNav = () => {
	const classes = useStyles();

	const [open, setOpen] = useState(false);
	const handleClick = () => setOpen(!open);
	return (
		<List className={classes.list}>
			<ListItem
				divider
				button
				className={classes.listItem}
				onClick={handleClick}
			>
				<ListItemText primary="Products" />

				{!open ? <ExpandMore /> : <ExpandLess />}
			</ListItem>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItem divider button className={classes.nested}>
						<ListItemText primary="All vacuums" />
					</ListItem>
					<ListItem divider button className={classes.nested}>
						<ListItemText primary="Upright" />
					</ListItem>
					<ListItem divider button className={classes.nested}>
						<ListItemText primary="Backpack" />
					</ListItem>
					<ListItem divider button className={classes.nested}>
						<ListItemText primary="Canister" />
					</ListItem>
					<ListItem divider button className={classes.listItem}>
						<ListItemText primary="Sweepers" />
					</ListItem>
					<ListItem divider button className={classes.listItem}>
						<ListItemText primary="Extractors" />
					</ListItem>
					<ListItem divider button className={classes.listItem}>
						<ListItemText primary="Air Movers" />
					</ListItem>
					<ListItem divider button className={classes.listItem}>
						<ListItemText primary="Power Sweepers" />
					</ListItem>
					<ListItem divider button className={classes.listItem}>
						<ListItemText primary="Steam Machines" />
					</ListItem>
					<ListItem divider button className={classes.listItem}>
						<ListItemText primary="Cleaning Formulas" />
					</ListItem>
					<ListItem divider button className={classes.listItem}>
						<ListItemText primary="Accessories" />
					</ListItem>
				</List>
			</Collapse>
		</List>
	);
};

export default memo(MobileSideNav);
