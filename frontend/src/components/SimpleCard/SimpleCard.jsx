import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardMedia, CardActionArea } from '@material-ui/core';
import picture from '../../images/BGH19E.jpg';

const useStyles = makeStyles({
	root: {
		minWidth: 275,
		textAlign: 'left',
		backgroundColor: '#F6F6F6',
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
		
	},
	media: {
		
		width: '100px',
		height: '200px',
		margin: '30px auto',
	},
	cardActions: {
		flexDirection: 'column',
	},
});

export default function SimpleCard() {
	const classes = useStyles();
	//const bull = <span className={classes.bullet}>•</span>;

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={picture}
					title="Paella dish"
				/>

				<CardContent>
					<Typography className={classes.title} color="textSecondary">
						AGM1000
					</Typography>
					<Typography className={classes.pos} color="textSecondary">
						$25 a day
					</Typography>
				</CardContent>
				{/* <CardActions className={classes.CardActions}>
				<Button color="secondary" size="small">
					Learn More
				</Button>
				<Button color="secondary" size="small">
					rent now
				</Button>
			</CardActions> */}
			</CardActionArea>
		</Card>
	);
}
