import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Paper, Grid, ButtonGroup } from '@material-ui/core';
import picture from '../../images/BGH19E.jpg';

const useStyles = makeStyles((theme) => ({
	paper: {
		//	width: '',
		//backgroundColor: 'grey',
	//	border: '1px solid lightgrey',
	},
	image: {
		width: '80%',
		height: '80%',
		//backgroundColor: 'white',
		//padding: 'auto'
		margin: 'auto',
	},
	row: {
		textAlign: 'center',
	},
	body: {
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column-reverse',
		},
	},

	title: {
		paddingTop: '10px',
	},
	informationGrid: {
		textAlign: 'left',
		backgroundColor: 'lightgrey',
		height: '100%',
	},
	imageGrid: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		
	},
	buttonGroup: {
		padding: '10px',
	},
}));

export default function SimpleCard() {
	const classes = useStyles();

	return (
		<Paper className={classes.paper} elevation={0}>
			<Grid container className={classes.body}>
				<Grid item xs={12} sm className={classes.row}>
					<Grid item xs={12} className={classes.informationGrid}>
						<Typography
							variant="h4"
							color="initial"
							gutterBottom
							className={classes.title}
						>
							AGM1000
						</Typography>
						<Typography color="textSecondary">AGM1000</Typography>
						<Typography color="textSecondary">feature 0</Typography>
						<Typography color="textSecondary">feature 1</Typography>
						<Typography color="textSecondary">feature 2</Typography>
						<Typography color="textSecondary">feature 3</Typography>
						<Typography color="textSecondary">feature 4</Typography>
						<Typography color="textSecondary">feature 5</Typography>
						<Typography color="textSecondary">feature 6</Typography>
						<Typography color="textSecondary">feature 7</Typography>
						<Typography color="textSecondary">feature 8</Typography>
						<Typography color="textSecondary">feature 9</Typography>
						<Typography color="textPrimary">$25 a day</Typography>
						<Typography color="textPrimary">buy for $12000</Typography>

						<Grid item xs={12}>
							<Typography variant="h5" color="initial">
								Quick rentals
							</Typography>
							<ButtonGroup
								color="default"
								aria-label="outlined"
								className={classes.buttonGroup}
							>
								rent for
								<Button>1 day</Button>
								<Button>2 day</Button>
								<Button>1 week</Button>
							</ButtonGroup>
						</Grid>
					</Grid>
				</Grid>

				<Grid item xs={12} sm className={classes.imageGrid}>
					<img className={classes.image} src={picture} alt="model" />
				</Grid>
			</Grid>
		</Paper>
	);
}
