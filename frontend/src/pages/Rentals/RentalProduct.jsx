import React, { useState,  useEffect, memo } from 'react';

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
}));

// function productFunc(obj, classes) {
// 	if (!obj) return {};

// 	let product = obj;

// 	return (

// 	);
// }

const RentalProduct = () => {
	const classes = useStyles();

	let { id } = useParams();

	const [product, setProduct] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			const results = await axios(`/products/sales/${id}`);
			setProduct(results.data);
		};
		fetchData();
	}, [id]);

	// const productSection = useMemo(() => productFunc(product, classes), [
	// 	product,
	// 	classes,
	// ]);

	console.log('rental product page **');
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
						<ProductCarousel />
					</Grid>
					<Grid item xs={1}></Grid>
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
								$ {(product.sale_price / 100).toFixed(2)}
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
								{product.units > 0 ? ` : In Stock` : ' : Call for Availability'}
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
					<Grid item sm={2}></Grid>
					<Grid item xs={12} sm={8}>
						<RentalButton product={product} />
					</Grid>
					<Grid item sm={2}></Grid>
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
			</Grid>
		</div>
	);
};

export default memo(RentalProduct);
