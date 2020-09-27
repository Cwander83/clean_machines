import React from 'react';

// react router
//import { Link } from 'react-router-dom';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// icons
import canister from '../../images/icons/canister.jpg';
import backpack from '../../images/icons/backpack.jpg';
import airmover from '../../images/icons/airmover.jpg';
import extractor from '../../images/icons/extractors.jpg';
import extrawide from '../../images/icons/extrawide.jpg';
import floormachine from '../../images/icons/floormachine.jpg';
import formula from '../../images/icons/formula.jpg';
import powersweeper from '../../images/icons/powersweeper.jpg';
import steammachine from '../../images/icons/steammachine.jpg';
import sweeper from '../../images/icons/sweeper.jpg';
import upright from '../../images/icons/upright.jpg';

const useStyles = makeStyles((theme) => ({
	button: {
		display: 'flex',
		paddingLeft: '40px',
		justifyContent: 'flex-start',
		//width: 'auto',
		letterSpacing: '.07em',
		textTransform: 'none',
	},
	grid: {},
	image: {
		height: '35px',
		width: 'auto',
	},
	imageBox: {
		width: '45px',
	},
}));
const SalesBox = () => {
	const classes = useStyles();

	const links = [
		{ title: 'View all Vacuums', image: upright, path: '/' },
		{ title: 'Upright Vacuums', image: upright, path: '/' },
		{ title: 'Canister Vacuums', image: canister, path: '/' },
		{ title: 'Backpack Vacuums', image: backpack, path: '/' },
		{ title: 'Air Movers', image: airmover, path: '/' },
		{ title: 'Extra-wide Vacuums', image: extrawide, path: '/' },
		{ title: 'Extractors', image: extractor, path: '/' },
		{ title: 'Power Sweepers', image: powersweeper, path: '/' },
		{ title: 'Sweepers', image: sweeper, path: '/' },
		{ title: 'Floor Machines', image: floormachine, path: '/' },
		{ title: 'Steam Machines', image: steammachine, path: '/' },
		{ title: 'Accessories', image: formula, path: '/' },
	];

	return (
		<Grid
			container
			direction="row"
			justify="flex-start"
			alignItems="flex-start"
		>
			{links.map((link, i) => {
				return (
					<Grid item xs={12} sm={6} className={classes.grid} key={i}>
						<Button className={classes.button}>
							<Box className={classes.imageBox}>
								<img
									src={link.image}
									alt={link.title}
									className={classes.image}
								/>
							</Box>
							<Typography variant="h6">{link.title}</Typography>
						</Button>
					</Grid>
				);
			})}
		</Grid>
	);
};

export default SalesBox;
