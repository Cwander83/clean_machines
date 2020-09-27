import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import canister from '../../images/icons/canister.jpg';
import backpack from '../../images/icons/backpack.jpg';
import {Extractors} from '../../images/icons'

const useStyles = makeStyles((theme) => ({
	box: {
		display: 'flex',
	},
}));
const SalesBox = () => {
	const classes = useStyles();

	const links = [
		{ title: 'All Vacuums' },
		{ title: 'Upright Vacuums' },
		{ title: 'Canister Vacuums' },
		{ title: 'Backpack Vacuums' },
		{ title: 'Extra-wide Vacuums' },
		{ title: 'Extractors' },
		{ title: 'Sweepers' },
		{ title: 'Floor Machines' },
		{ title: 'Steam Machines' },
		{ title: 'Accessories' },
	];

	return (
		<Grid
			container
			direction="row"
			justify="flex-start"
			alignItems="flex-start"
		>

			<Grid item className={classes.grid}>
				<Button className={classes.box}>
					<img src={Extractors} alt="vacuum" />
					<Typography variant="h6">vacuum</Typography>
				</Button>
			</Grid>
		</Grid>
	);
};

export default SalesBox;

{
	/* <List>
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
</List> */
}
