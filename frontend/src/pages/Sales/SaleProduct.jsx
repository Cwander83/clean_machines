import React, { useState, useMemo, useEffect } from 'react';

// axios
import axios from 'axios';

// react router
import { useParams } from 'react-router-dom';

// material ui
import { makeStyles } from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// context api
//import { CartContext } from '../../context/cart-context';

// images
import picture from '../../images/BGFS5000.jpg';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		height: '100%',
	},
	image: {
		height: '300px',
	},
}));

function productFunc(obj, classes) {
	if (!obj) return {};

	let product = obj;

	return (
		<Grid item xs={12}>
			<Grid item xs={6}>
				<img className={classes.image} src={picture} alt="vacuum" />
			</Grid>

			<Grid item xs={6}>
				<Typography className={classes.title} variant="h6">
					{!product.name ? product.model : product.name}
				</Typography>
			</Grid>
		</Grid>
	);
}

const SaleProduct = () => {
	const classes = useStyles();

	let { id } = useParams();

	//	const { updateProduct } = useContext(CartContext);

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
