import React from 'react';

// react router
//import { Link } from 'react-router-dom';

// material ui
import { makeStyles } from '@material-ui/core/styles';
//import Grid from '@material-ui/core/Grid';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// images
import image from '../../images/BGFS5000.jpg';

// carousel
import Carousel from 'react-slick';
import MagicSliderDots from 'react-magic-slider-dots';

// CSS for carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/Carousel.css';
import 'react-magic-slider-dots/dist/magic-dots.css';

const useStyles = makeStyles((theme) => ({
	image: {
		height: '300px',
		width: 'auto',
		margin: 'auto',
	},
	center: {},
	carousel: {
		width: '100%',
	},
}));

const ProductCarousel = () => {
	const classes = useStyles();

	const settings = {
		dots: true,
		className: `${classes.center}`,
		centerMode: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		appendDots: (dots) => {
			return <MagicSliderDots dots={dots} numDotsToShow={6} dotWidth={30} />;
		},
	};

	return (
		<Carousel className={classes.carousel} {...settings}>
			<div>
				<img src={image} alt="bisssell" className={classes.image} />
				<Typography variant="caption">Vacuum</Typography>
			</div>
			<div>
				<img src={image} alt="bisssell" className={classes.image} />
				<Typography variant="caption">Vacuum</Typography>
			</div>
			<div>
				<img src={image} alt="bisssell" className={classes.image} />
				<Typography variant="caption">Vacuum</Typography>
			</div>
			<div>
				<img src={image} alt="bisssell" className={classes.image} />
				<Typography variant="caption">Vacuum</Typography>
			</div>
		</Carousel>
	);
};

export default ProductCarousel;
