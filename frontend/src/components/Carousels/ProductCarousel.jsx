import React, { useEffect, useState } from 'react';

// material ui
import { makeStyles } from '@material-ui/core/styles';
//import Typography from '@material-ui/core/Typography';

// images

// carousel
import Carousel from 'react-slick';
import MagicSliderDots from 'react-magic-slider-dots';

// CSS for carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/Carousel.css';
import 'react-magic-slider-dots/dist/magic-dots.css';
//import axios from 'axios';

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

const ProductCarousel = ({ model }) => {
	const classes = useStyles();
	const numberOfUrls = 4;

	const [numberUrls, setNumber] = useState([]);

	const settings = {
		dots: true,
		className: `${classes.center}`,
		centerMode: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		lazyLoad: true,
		speed: 500,
		appendDots: (dots) => {
			return <MagicSliderDots dots={dots} numDotsToShow={6} dotWidth={30} />;
		},
	};

	useEffect(() => {
		setNumber([...new Array(numberOfUrls)]);
	}, [model]);

	return (
		<Carousel className={classes.carousel} {...settings}>
			{model &&
				numberUrls.map((ele, index) => (
					<div key={index}>
						<img
							src={`https://products.oss.nodechef.com/${model}-${
								index + 1
							}.jpg`}
							alt={'Clean Machines Rentals - ' + model}
							className={classes.image}
						/>
					</div>
				))}
		</Carousel>
	);
};

export default ProductCarousel;
