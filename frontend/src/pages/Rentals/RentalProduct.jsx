import React, { useState, useMemo, useEffect, memo } from 'react';

// classnames
import ClassNames from 'classnames';

// axios
import axios from 'axios';

// react router
import { useParams } from 'react-router-dom';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

// components
import ProductCarousel from '../../components/Carousels/ProductCarousel';
import Features from '../../components/Features';
import Specs from '../../components/Specs';
import ImagesDropdown from '../../components/ImagesDropdown';
import RentalButton from '../../components/Buttons/RentalButton';

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: '15px',
	},
	head: {
		display: 'flex',
		justifyContent: 'flex-start',
		textAlign: 'left',
		marginLeft: '5px',
	},

	body1: {
		fontSize: '18px',
	},
	uppercase: {
		textTransform: 'capitalize',
	},
	model: {
		marginTop: '30px',
		textTransform: 'uppercase',
		fontSize: '40px',
		fontWeight: 600,
	},
	divider: {
		marginTop: '10px',
		marginBottom: '20px',
	},
	price: {
		fontStyle: 'italic',
		marginBottom: '20px',
		color: theme.palette.gold.main,
		fontSize: '30px',
	},
	title: {
		marginLeft: '10px',
	},
	image: {
		width: '300px',
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
}));

function productFunc(obj, classes) {
	if (!obj) return {};

	let product = obj;

	return (
		<Grid container justify="center">
			<Grid item xs={12}>
				<Typography
					align="center"
					className={ClassNames(classes.model)}
					variant="h4"
				>
					{product.name ? product.name : product.model}
				</Typography>

				<Typography
					align="center"
					gutterBottom={true}
					className={ClassNames(classes.price)}
					variant="h5"
				>
					$ {(product.rental_day / 100).toFixed(2)} per day
				</Typography>
			</Grid>
			<Divider className={classes.divider} />

			<Grid item xs={12}>
				<Typography
					align="left"
					display="inline"
					className={ClassNames(classes.title)}
					variant="h6"
				>
					Availability
				</Typography>

				<Typography
					gutterBottom
					display="inline"
					className={ClassNames(classes.body1)}
					variant="subtitle1"
				>
					{' : In Stock'}
				</Typography>

				<Typography
					align="left"
					display="inline"
					className={ClassNames(classes.title)}
					variant="h6"
				>
					Category
				</Typography>

				<Typography
					gutterBottom
					display="inline"
					className={ClassNames(classes.body1, classes.uppercase)}
					variant="body1"
				>
					{` : ${product.category}`}
				</Typography>
			</Grid>
		</Grid>
	);
}

const RentalProduct = () => {
	const classes = useStyles();

	let { id } = useParams();

	const [product, setProduct] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			const results = await axios(`/api/products/rental/${id}`);
			setProduct(results.data);
		};
		fetchData();
	}, [id]);

	const productSection = useMemo(() => productFunc(product, classes), [
		product,
		classes,
	]);

	return (
		<div className={classes.root}>
			<Grid alignContent="flex-start" container>
				<Grid
					container
					spacing={2}
					className={classes.root}
					justify="flex-start"
				>
					<Grid item xs={1}></Grid>
					<Grid item xs={10}>
						<img
							src={`https://products.oss.nodechef.com/${product.model}-1
								
							.jpg`}
							alt={'Clean Machines Rentals - ' + product.model}
							className={classes.image}
						/>
						<ProductCarousel
							model={product.model}
							numberOfUrls={product.number_of_images}
						/>
					</Grid>
					<Grid item xs={1}></Grid>
					{productSection}

					<Grid item xs={12}>
						<RentalButton product={product} />
					</Grid>
				</Grid>

				<Grid item sm={2}></Grid>

				<Grid item xs={12} sm={8}>
					<Features product={product} />
				</Grid>
				<Grid item sm={2}></Grid>
				<Grid item sm={2}></Grid>
				<Grid item xs={12} sm={8}>
					<Specs product={product} />
				</Grid>
				<Grid item sm={2}></Grid>
				<Grid item sm={2}></Grid>
				<Grid item xs={12} sm={8}>
					<ImagesDropdown
						model={product.model}
						numberOfUrls={product.number_of_images}
					/>
				</Grid>
				<Grid item sm={2}></Grid>
			</Grid>
		</div>
	);
};

export default memo(RentalProduct);
