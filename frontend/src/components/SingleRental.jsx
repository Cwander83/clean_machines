import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Divider from '@material-ui/core/Divider';

import picture from '../images/BGH19E.jpg';

const useStyles = makeStyles((theme) => ({
	paper: {
		width: '100%',
	},
	image: {
		width: 'auto',
		height: '100%',
		maxHeight: '300px',
	},
	informationGrid: {
		textAlign: 'left',
	},
	title: {
		padding: '0 0 10px 30px',
		textTransform: 'uppercase',
	},
	modelText: {
		padding: '0 0 0 30px',
		fontSize: '16px',
		color: 'black',
	},
	priceText: {
		padding: '5px 10px',
		marginRight: '10px',
		fontSize: '14px',
	},
	modelText2: {
		padding: '0 0 0 80px',
		textTransform: 'uppercase',
	},
	modelTitle: {
		display: 'flex',
		flexDirection: 'row',
		margin: '10px 0',
	},
	list: {
		paddingLeft: '60px',
		margin: '0',
	},
	pricesGrid: {
		color: 'black',
		marginTop: '10px',
		flexDirection: 'row',
		display: 'flex',
	},
	listItem: {
		listStyle: 'none',
	},
	button: {
		margin: '5px 0 15px 30px',
	},
	quickTitle: {
		marginRight: '30px',
	},
}));

const SingleRental = ({ product }) => {
	const classes = useStyles();
	return (
		
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<img className={classes.image} src={picture} alt="model" />
				</Grid>

			
			</Grid>
		
	);
};

export default SingleRental;
