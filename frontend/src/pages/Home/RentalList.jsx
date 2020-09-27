import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
	nested: {
		paddingLeft: '15px',
	},
}));
const SalesList = () => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const vacuums = [
		'All Vacuums',
		'Upright Vacuums',
		'Canister Vacuums',
		'Backpack Vacuums',
		'Extra-wide Vacuums',
	];

	return (
		<div>
			<List>
				<ListItem button onClick={handleClick}>
					<ListItemText primary="Vacuums" />
					{open ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						{vacuums.map((vacuum, i) => {
							return (
								<ListItem key={i} button >
									<ListItemText primary={vacuum} className={classes.nested}/>
								</ListItem>
							);
						})}
					</List>
				</Collapse>
				<ListItem button>
					<ListItemText primary="Power Sweepers" />
				</ListItem>
				<ListItem button>
					<ListItemText primary="Extractors" />
				</ListItem>
				<ListItem button>
					<ListItemText primary="Sweepers" />
				</ListItem>
				<ListItem button>
					<ListItemText primary="Floor Machines" />
				</ListItem>
				<ListItem button>
					<ListItemText primary="Steam Machines" />
				</ListItem>
				<ListItem button>
					<ListItemText primary="Air Movers" />
				</ListItem>
				<ListItem button>
					<ListItemText primary="Cleaning Formulas" />
				</ListItem>
				<ListItem button>
					<ListItemText primary="Accessories" />
				</ListItem>
			</List>
		</div>
	);
};

export default SalesList;
