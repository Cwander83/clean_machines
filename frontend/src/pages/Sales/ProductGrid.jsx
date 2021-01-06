import React, { useMemo, memo, useEffect, useState, useContext } from 'react';

// react router
import { Link } from 'react-router-dom';

// axios
import axios from 'axios';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';

// context api
import { SalesContext } from '../../context/sales-context';

// images

// ui
import Spinner from '../../UI/Spinner';

const useStyles = makeStyles((theme) => ({
	title: {
		color: 'black',
	},
	card: {},

	media: {
		height: 350,
		backgroundSize: 'contain',
	},
	content: {
		backgroundColor: theme.palette.primary.light,
		color: 'white',
		paddingBottom: '0px',
		textAlign: 'center',
	},
	description: {
		color: theme.palette.gold.main,
	},
	price: {
		fontStyle: 'italic',
	},
	divider: {
		backgroundColor: theme.palette.gold.main,
	},
	subtitle: {
		marginLeft: '5px',
		fontSize: '22px',
		fontWeight: 600,
		textTransform: 'Capitalize',
	},
}));

function productFunc(array, classes) {
	if (!array) {
		return [];
	}
	//console.log(array);

	const result = array.map((product) => {
		let imageUrl = `https://products.oss.nodechef.com/${product.model}-1.jpg`;
		//console.log(imageUrl);
		return (
			<Grid
				item
				key={product.id}
				xs={12}
				sm={6}
				md={4}
				className={classes.root}
			>
				<Card
					classes={{
						root: classes.card,
					}}
					elevation={3}
				>
					<CardActionArea component={Link} to={`/sales/${product.id}`}>
						<CardMedia image={imageUrl} className={classes.media} />
					</CardActionArea>
					<CardContent className={classes.content}>
						<Typography gutterBottom variant="h5">
							{product.name ? product.name : product.model}
						</Typography>

						<Typography variant="body1" className={classes.description}>
							{product.short_description}
						</Typography>
						<Typography variant="h6" className={classes.price}>
							$ {(product.sale_price / 100).toFixed(2)}
						</Typography>
					</CardContent>
				</Card>
			</Grid>
		);
	});

	return result;
}

const ProductGrid = () => {
	const classes = useStyles();

	const [products, setProducts] = useState([]);

	let { category } = useContext(SalesContext);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(`/api/products/sales/category/${category}`);
			setProducts(result.data);
		};
		fetchData();
	}, [category]);

	const productSection = useMemo(() => productFunc(products, classes), [
		products,
		classes,
	]);

	const categoryFunc = (string) => {
		let array = string.split('');
		let secondArray = [];
		array.forEach((char) => {
			if (char !== '-') secondArray.push(char);
			else secondArray.push(' ');
		});
		let newString = secondArray.join('');

		return newString.toUpperCase();
	};
	return (
		<>
			<Grid container spacing={4}>
				<Grid item xs sm={3}></Grid>
				<Grid item xs={12} sm={6}>
					<Typography display="inline" variant="h5">
						CATEGORY:
						<Typography
							display="inline"
							variant="body1"
							className={classes.subtitle}
						>
							{categoryFunc(category)}
						</Typography>
					</Typography>
					<Divider className={classes.divider} />
				</Grid>
				<Grid item xs sm={3}></Grid>
				{products.length === 0 ? <Spinner /> : productSection}
			</Grid>
		</>
	);
};

export default memo(ProductGrid);
