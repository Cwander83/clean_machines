import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
//import { Paper, ButtonGroup } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import picture from '../../images/BGH19E.jpg';
import { Link, useRouteMatch } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	paper: {
		//	width: '',
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

const RentalCard = React.memo((product) => {
	let { url } = useRouteMatch();
	let { name, id, model } = product.product;
	const classes = useStyles();
	console.log(product);
	return (
		<Grid item xs={11} sm={6} md={4}>
			<Card className={classes.root} elevation={2}>
				<Link to={{ pathname: `${url}/${id}`, state: { product } }}>
					<CardActionArea>
						<CardMedia
							component="img"
							alt="model image"
							className={classes.image}
							image={picture}
							title="model image"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								{name ? name : model}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Link>
				<CardActions>
					<Button size="small" color="primary">
						Learn More
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
});

export default RentalCard;
