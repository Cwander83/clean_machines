import React from 'react';
//import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



import image1 from '../../images/697.jpg';
 import image2 from '../../images/BGAM3000.jpg';
// import image3 from '../../images/697ActionA.jpg';
// import image4 from '../../images/BG101H(3).jpg';
import image5 from '../../images/355.jpg'


import Carousel from 'react-slick';
import MagicSliderDots from 'react-magic-slider-dots';


// CSS for carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/Carousel.css';
import 'react-magic-slider-dots/dist/magic-dots.css';


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
		appendDots: (dots) => {
			return <MagicSliderDots dots={dots} numDotsToShow={6} dotWidth={30} />;
		},
	};

	return (
		<Grid container className={classes.sliderGrid}>
			<Grid item xs={12}>
				<Carousel {...settings}  >
					<div>
						<img src={image1} alt="bisssell" className={classes.image} />
						<Typography variant="caption">Vacuum</Typography>
					</div>
					<div>
						<img src={image2} alt="bisssell" className={classes.image} />
						<Typography variant="caption">Air Movers</Typography>
					</div>
					<div>
						<img src={image5} alt="bisssell" className={classes.image} />
						<Typography variant="caption">Power Sweepers</Typography>
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
