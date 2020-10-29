import React, { useState, memo, useContext } from 'react';

// react router
import { Link } from 'react-router-dom';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';

// context api
import { SalesContext } from '../../context/sales-context';

// utils
import { vacuums, otherLinks } from '../../utils/sales';

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
				<ListItem className={classes.listItem}>
					<ListItemText primary="" />
				</ListItem>
				<ListItem className={classes.listItem}>
					<ListItemText primary="" />
				</ListItem>

				<List component="div" disablePadding>
					{vacuums.map((link) => (
						<ListItem
							key={link.title}
							divider
							button
							component={Link}
							className={`classes.${link.className}`}
							to={link.path}
							onClick={() => setCategory(link.value)}
						>
							<ListItemText primary={link.title} />
						</ListItem>
					))}
				</List>
				{otherLinks.map((link) => (
					<ListItem
						key={link.title}
						divider
						button
						component={Link}
						className={`classes.${link.className}`}
						to={link.path}
						onClick={() => setCategory(link.value)}
					>
						<ListItemText primary={link.title} />
					</ListItem>
				))}
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

						{vacuums.map((link) => (
							<ListItem
								key={link.title}
								divider
								button
								component={Link}
								className={`classes.${link.className}`}
								to={link.path}
								onClick={() => {
									setOpen(false);
									setCategory(link.value);
								}}
							>
								<ListItemText primary={link.title} />
							</ListItem>
						))}
						{otherLinks.map((link) => (
							<ListItem
								key={link.title}
								divider
								button
								component={Link}
								className={`classes.${link.className}`}
								to={link.path}
								onClick={() => {
									setOpen(false);
									setCategory(link.value);
								}}
							>
								<ListItemText primary={link.title} />
							</ListItem>
						))}
					</List>
				</Collapse>
			</List>
		</>
	);
};

export default memo(SideNav);
