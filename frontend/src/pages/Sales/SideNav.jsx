import React, { useState, memo, useContext } from 'react';

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

import { SalesContext } from '../../context/sales-context';

const useStyles = makeStyles((theme) => ({
	nested: {
		paddingLeft: theme.spacing(4),
	},
	listDesktop: {
		padding: '5px',
		[theme.breakpoints.down('600')]: {
			display: 'none',
		},
	},
	listMobile: {
		padding: '5px',
		[theme.breakpoints.up('601')]: {
			display: 'none',
		},
	},
}));

const SideNav = () => {
	const classes = useStyles();

	const [open, setOpen] = useState(false);

	let { setCategory } = useContext(SalesContext);

	const handleClick = () => setOpen(!open);
	return (
		<>
			<List className={classes.listDesktop}>
				<ListItem divider className={classes.listItem}>
					<ListItemText primary="Vacuums" />
				</ListItem>

				<List component="div" disablePadding>
					<ListItem
						divider
						button
						className={classes.nested}
						onClick={() => setCategory('upright')}
					>
						<ListItemText primary="Upright" />
					</ListItem>
					<ListItem
						divider
						button
						className={classes.nested}
						onClick={() => setCategory('backpack')}
					>
						<ListItemText primary="Backpack" />
					</ListItem>
					<ListItem
						divider
						button
						className={classes.nested}
						onClick={() => setCategory('canister')}
					>
						<ListItemText primary="Canister" />
					</ListItem>
					<ListItem
						divider
						button
						className={classes.nested}
						onClick={() => setCategory('extra-wide')}
					>
						<ListItemText primary="Extra-wide" />
					</ListItem>
				</List>

				<ListItem
					divider
					button
					className={classes.listItem}
					onClick={() => setCategory('sweeper')}
				>
					<ListItemText primary="Sweepers" />
				</ListItem>
				<ListItem
					divider
					button
					className={classes.listItem}
					onClick={() => setCategory('extractor')}
				>
					<ListItemText primary="Extractors" />
				</ListItem>
				<ListItem
					divider
					button
					className={classes.listItem}
					onClick={() => setCategory('air-mover')}
				>
					<ListItemText primary="Air Movers" />
				</ListItem>
				<ListItem
					divider
					button
					className={classes.listItem}
					onClick={() => setCategory('power-sweeper')}
				>
					<ListItemText primary="Power Sweepers" />
				</ListItem>
				<ListItem
					divider
					button
					className={classes.listItem}
					onClick={() => setCategory('steam-machine')}
				>
					<ListItemText primary="Steam Machines" />
				</ListItem>
				<ListItem
					divider
					button
					className={classes.listItem}
					onClick={() => setCategory('formulas')}
				>
					<ListItemText primary="Cleaning Formulas" />
				</ListItem>
				<ListItem
					divider
					button
					className={classes.listItem}
					onClick={() => setCategory('accessories')}
				>
					<ListItemText primary="Accessories" />
				</ListItem>
			</List>
			<List className={classes.listMobile}>
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
						<ListItem divider className={classes.listItem}>
							<ListItemText primary="All Vacuums" />
						</ListItem>
						<ListItem
							divider
							button
							className={classes.listItem}
							onClick={() => setCategory('upright')}
						>
							<ListItemText primary="Upright Vacuums" />
						</ListItem>
						<ListItem
							divider
							button
							className={classes.listItem}
							onClick={() => setCategory('backpack')}
						>
							<ListItemText primary="Backpack Vacuums" />
						</ListItem>
						<ListItem
							divider
							button
							className={classes.listItem}
							onClick={() => setCategory('canister')}
						>
							<ListItemText primary="Canister Vacuums" />
						</ListItem>
						<ListItem
							divider
							button
							className={classes.listItem}
							onClick={() => setCategory('extra-wide')}
						>
							<ListItemText primary="extra-wide Vacuums" />
						</ListItem>
						<ListItem
							divider
							button
							className={classes.listItem}
							onClick={() => setCategory('sweeper')}
						>
							<ListItemText primary="Sweepers" />
						</ListItem>
						<ListItem
							divider
							button
							className={classes.listItem}
							onClick={() => setCategory('extractor')}
						>
							<ListItemText primary="Extractors" />
						</ListItem>
						<ListItem
							divider
							button
							className={classes.listItem}
							onClick={() => setCategory('air-mover')}
						>
							<ListItemText primary="Air Movers" />
						</ListItem>
						<ListItem
							divider
							button
							className={classes.listItem}
							onClick={() => setCategory('power-sweeper')}
						>
							<ListItemText primary="Power Sweepers" />
						</ListItem>
						<ListItem
							divider
							button
							className={classes.listItem}
							onClick={() => setCategory('steam-machine')}
						>
							<ListItemText primary="Steam Machines" />
						</ListItem>
						<ListItem
							divider
							button
							className={classes.listItem}
							onClick={() => setCategory('formulas')}
						>
							<ListItemText primary="Cleaning Formulas" />
						</ListItem>
						<ListItem
							divider
							button
							className={classes.listItem}
							onClick={() => setCategory('accessories')}
						>
							<ListItemText primary="Accessories" />
						</ListItem>
					</List>
				</Collapse>
			</List>
		</>
	);
};

export default memo(SideNav);
