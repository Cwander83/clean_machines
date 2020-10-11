import React, { useState, useMemo, useEffect } from 'react';

// classnames
import ClassNames from 'classnames';

// axios
import axios from 'axios';

// react router
import { useParams } from 'react-router-dom';

// material ui
import { makeStyles } from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

// context api
//import { CartContext } from '../../context/cart-context';

// components
import ProductCarousel from '../../components/Carousels/ProductCarousel';
import Features from './ProductSections/Features';
import Specs from './ProductSections/Specs';

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
		marginTop: '20px',
	},
	divider: {
		marginTop: '10px',
		marginBottom: '20px',
	},
	price: {
		fontStyle: 'italic',
		marginBottom: '20px',
		color: theme.palette.gold.main,
		fontSize: '24px',
	},
	title: {
		marginLeft: '10px',
	},
}));

function productFunc(obj, classes) {
	if (!obj) return {};

	let product = obj;

	return (
		<Grid container spacing={2} className={classes.root} justify="flex-start">
			<Grid item xs={1}></Grid>
			<Grid item xs={10}>
				<ProductCarousel />
			</Grid>
			<Grid item xs={1}></Grid>

			<Grid item xs={12} sm={4} md={4}>
				<Grid item xs={12}>
					<Typography
						align="center"
						gutterBottom
						className={ClassNames(classes.model)}
						variant="h4"
					>
						{product.model}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography
						align="center"
						gutterBottom={true}
						className={ClassNames(classes.price)}
						variant="h5"
					>
						$ {(product.sale_price / 100).toFixed(2)}
					</Typography>
				</Grid>
				<Divider variant="fullWidth" className={ClassNames(classes.divider)} />
				<Grid item xs={12} className={classes.head}>
					<Grid item xs={7} sm={8} md={7} lg={5}>
						<Typography
							align="left"
							display="inline"
							className={ClassNames(classes.title)}
							variant="h6"
						>
							Availability
						</Typography>
					</Grid>
					<Grid item xs={6} sm={4} md={5} lg>
						<Typography
							gutterBottom
							display="inline"
							className={ClassNames(classes.body1)}
							variant="subtitle1"
						>
							{product.units > 0 ? ` : In Stock` : ' : Call for Availability'}
						</Typography>
					</Grid>
				</Grid>
				<Grid item xs={12} className={classes.head}>
					<Grid item xs={7} sm={8} md={7} lg={5}>
						<Typography
							align="left"
							display="inline"
							className={ClassNames(classes.title)}
							variant="h6"
						>
							Category
						</Typography>
					</Grid>
					<Grid item xs={6} sm={4} md={5} lg>
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
				<Divider variant="fullWidth" className={ClassNames(classes.divider)} />
			</Grid>

			<Grid item xs={12}>
				<Features product={product} />

				
			</Grid>
			<Grid item xs={12}>
				<Specs product={product} />
			</Grid>
		</Grid>
	);
}

const SaleProduct = () => {
	const classes = useStyles();

	let { id } = useParams();

	const [product, setProduct] = useState({});

	//const [amount, setAmount] = useState(1); // inside dialog

	// opens dialog
	//const [open, setOpen] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			const results = await axios(`/products/sales/${id}`);
			setProduct(results.data);
		};
		fetchData();
	}, [id]);

	// const handleClickOpen = () => {
	// 	// dialog
	// 	setOpen(true);
	// };

	// const handleClose = () => {
	// 	// dialog
	// 	setOpen(false);
	// };

	// const increment = () => {
	// 	// inside dialog
	// 	setAmount((prevState) =>
	// 		prevState === product.units ? prevState : prevState + 1
	// 	);
	// };
	// const decrement = () => {
	// 	setAmount((prevState) => (prevState === 1 ? prevState : prevState - 1));
	// };

	// const addToCart = () => {
	// 	// sends data to cart context
	// 	let data = {
	// 		productId: product.id,
	// 		unitPrice: product.sale_price,
	// 		amount: amount,
	// 	};
	// 	console.log(data);
	// 	updateProduct({ data });
	// };

	const productSection = useMemo(() => productFunc(product, classes), [
		product,
		classes,
	]);

	return (
		<div className={classes.root}>
			<Grid alignContent="flex-start" container>
				{productSection}
				{/* 

				<Button>add to cart</Button> */}
			</Grid>
		</div>
	);
};

export default SaleProduct;
