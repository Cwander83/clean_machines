import React from 'react';
//import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
//import Paper from '@material-ui/core/Paper';
//import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

import BGH15E from '../../images/BGH15E.jpg';

import Carousel from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
	},
}));

const DemoCarousel = () => {
	const classes = useStyles();

	const settings = {
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
			<Card>
				<Carousel {...settings}>
					<div>
						<Grid item xs={12} className={classes.slide}>
							<Grid item xs={6}>
								<img src={BGH15E} alt="bisssell" className={classes.image} />
							</Grid>
							<Grid item xs={6}>
								<Typography variant="body1">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book.
								</Typography>
							</Grid>
						</Grid>
					</div>
				</Carousel>
			</Card>
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
