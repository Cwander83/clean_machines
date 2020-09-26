import React from 'react';
//import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import image1 from '../../images/697.jpg';
import image2 from '../../images/BGH17E.jpg';
import image3 from '../../images/697ActionA.jpg';
import image4 from '../../images/BG101H(3).jpg';

import Carousel from 'react-slick';

// CSS for carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/Carousel.css';
import theme from '../../theme/theme';

const useStyles = makeStyles((theme) => ({
	image: {
		height: '200px',
		width: 'auto',
		margin: 'auto',
	},
	sliderGrid: {},
	sliderTitle: {
		//backgroundColor: theme.palette.gold.main,
	},

	slideList: {},
	center: {
		height: '300px',
	},
}));

const DemoCarousel = () => {
	const classes = useStyles();

	const settings = {
		dots: true,
		className: `${classes.center}`,
		centerMode: true,
		//centerPadding: '60px',
		infinite: true,
		slidesToShow: 5,
		speed: 500,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
		appendDots: (dots) => (
			<div
				style={{
					backgroundColor: theme.palette.primary.main,
					borderRadius: '10px',
					padding: '10px',
				}}
			>
				<ul style={{ margin: '0px' }}>{dots}</ul>
			</div>
		),
		customPaging: (i) => (
			<div
				style={{
					width: '30px',
					height: '10px',
					backgroundColor: theme.palette.primary.main,
					margin: '5px',
					border: '1px black solid',
					textAlign: 'center',
				}}
			></div>
		),
	};

	return (
		<Grid container className={classes.sliderGrid}>
			<Grid item xs={12}>
				<Carousel {...settings}>
					<div>
						<img src={image1} alt="bisssell" className={classes.image} />
						<Typography variant="caption">Vacuum</Typography>
					</div>
					<div>
						<img src={image1} alt="bisssell" className={classes.image} />
						<Typography variant="caption">Vacuum</Typography>
					</div>
					<div>
						<img src={image1} alt="bisssell" className={classes.image} />
						<Typography variant="caption">Vacuum</Typography>
					</div>
					<div>
						<img src={image1} alt="bisssell" className={classes.image} />
						<Typography variant="caption">Vacuum</Typography>
					</div>
					<div>
						<img src={image1} alt="bisssell" className={classes.image} />
						<Typography variant="caption">Vacuum</Typography>
					</div>
					<div>
						<img src={image1} alt="bisssell" className={classes.image} />
						<Typography variant="caption">Vacuum</Typography>
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
