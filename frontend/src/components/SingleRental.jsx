import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Paper from '@material-ui/core/Paper';

import picture from '../images/BGH19E.jpg';
//import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
	paper: {
		width: '100%',
		//backgroundColor: 'grey',
		//	border: '1px solid lightgrey',
	},
	image: {
		width: 'auto',
		height: '80%',
		maxHeight: '300px',
		//backgroundColor: 'white',
		paddingTop: '20px',
		margin: 'auto',
	},

	title: {
		paddingTop: '10px',
	},
}));

const SingleRental = ({ location }) => {
	console.log(JSON.stringify(location, null, 2));
	let product = location.state.product.product;
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
							{product.name}
						</Typography>
						<Typography color="textSecondary">{product.model}</Typography>
						<Typography color="textSecondary">
							{product.feature_0 ? product.feature_0 : <></>}
						</Typography>
						<Typography color="textSecondary">
							{product.feature_1 ? product.feature_1 : <></>}
						</Typography>
						<Typography color="textSecondary">
							{product.feature_2 ? product.feature_2 : <></>}
						</Typography>
						<Typography color="textSecondary">
							{product.feature_3 ? product.feature_3 : <></>}
						</Typography>
						<Typography color="textSecondary">
							{product.feature_4 ? product.feature_4 : <></>}
						</Typography>
						<Typography color="textSecondary">
							{product.feature_5 ? product.feature_5 : <></>}
						</Typography>
						<Typography color="textSecondary">
							{product.feature_6 ? product.feature_6 : <></>}
						</Typography>
						<Typography color="textSecondary">
							{product.feature_7 ? product.feature_7 : <></>}
						</Typography>
						<Typography color="textSecondary">
							{product.feature_8 ? product.feature_8 : <></>}
						</Typography>
						<Typography color="textSecondary">
							{product.feature_9 ? product.feature_9 : <></>}
						</Typography>
						<Typography color="textPrimary">
							${product.rental_price.toFixed(2)} a day
						</Typography>
						<Typography color="textPrimary">
							buy for ${product.sale_price.toFixed(2)}
						</Typography>

						<Grid item xs={12}>
							<Typography variant="h5" color="initial">
								Quick rentals
							</Typography>
							<ButtonGroup
								color="default"
								aria-label="outlined"
								className={classes.buttonGroup}
							>
								<Button>1 day</Button>
								<Button>2 day</Button>
								<Button>1 week</Button>
							</ButtonGroup>
						</Grid>
					</Grid>
				</Grid>

				<Grid item xs={12} className={classes.imageGrid}>
					<img className={classes.image} src={picture} alt="model" />
				</Grid>
				<Grid item xs={12} className={classes.caption}>
					<Typography variant="h6">AGM1000</Typography>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default SingleRental;
