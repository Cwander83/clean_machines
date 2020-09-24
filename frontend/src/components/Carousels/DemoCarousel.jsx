import React from 'react';
//import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
//import Paper from '@material-ui/core/Paper';
//import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import BGH15E from '../../images/BGH15E.jpg';

import Carousel from 'react-slick';

// CSS for carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/Carousel.css';

const useStyles = makeStyles((theme) => ({
	image: {
		maxHeight: '400px',
		padding: '30px',
	},
	sliderGrid: {
		//paddingBottom: '30px',
		// backgroundColor: theme.palette.primary.main,
	},
	sliderTitle: {
		//backgroundColor: theme.palette.gold.main,
	},
	slide: {
		height: '100%',
		display: 'flex',
		outline: 'none',
		border: 'none',
		borderColor: 'transparent',
		outlineColor: 'transparent',
		'&$focus': {
			outline: 'none',
			border: 'none',
		},
	},
	slideList: {},
	card: {
		
		width: '100%',
	},
}));

const DemoCarousel = () => {
	const classes = useStyles();

	const settings = {
		className: 'center',
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 1500,
		arrows: false,
		autoplaySpeed: 4000,
		//cssEase: 'linear',
	};

	return (
		<Grid container className={classes.sliderGrid}>
			<Grid item xs={12} sm={10} md={8}>
				<Carousel {...settings}>
					<div>
						<Card className={classes.card}>
							<CardContent>
								<img src={BGH15E} alt="bisssell" className={classes.image} />
							</CardContent>
							<CardActions>
								<Button>Learn more!</Button>
							</CardActions>
						</Card>
					</div>
				</Carousel>
			</Grid>
		</Grid>
	);
};

export default DemoCarousel;

// TODO
// * LANDING
// * DESC OF COMPANY
// * HOW THE RENTALS WORK
// * SEARCH FOR RENTALS
// * SHOW TOP SELLING PRODUCT
// * DEMO VIDEOS
