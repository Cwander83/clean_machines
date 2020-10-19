import React, { useMemo, memo, useEffect, useState } from 'react';

// react router
import {
	// Switch, Route, useRouteMatch,
	Link,
} from 'react-router-dom';

// classnames
import ClassNames from 'classnames';

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
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';

// context
//import { RentalContext } from '../../context/rental-context';

// images
import picture from '../../images/BGFS5000.jpg';

const useStyles = makeStyles((theme) => ({
	root: {},
	title: {
		color: 'black',
	},
	card: {},

	media: {
		height: 250,
		backgroundSize: 'contain',
	},
	content: {
		//backgroundColor: theme.palette.primary.light,
		//color: 'white',
		paddingBottom: '0px',
		//textAlign: 'left',
	},
	description: {
		color: theme.palette.gold.main,
		//fontStyle: 'italic',
	},
	prices: {
		textTransform: 'Capitalize',
		fontWeight: 500,
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
	priceTitle: {
		textAlign: 'left',
		marginLeft: '25%',
	},
	priceBody: {
		textAlign: 'right',
		marginRight: '35%',

		fontStyle: 'italic',
	},
	icon: {
		marginRight: '5px',
		fontSize: '18px',
		verticalAlign: 'middle',
	},
	rentNowButton: {
		marginTop: '15px',
		fontStyle: 'italic',
		textDecoration: 'underline',
		textDecorationColor: theme.palette.gold.main,
	},
	firstOfType: {
		marginTop: '10px',
	},
}));

function productFunc(array, classes) {
	if (!array) {
		return [];
	}
	console.log(array);

	const result = array.map((product) => {
		return (
			<Grid
				item
				xs={12}
				sm={6}
				md={4}
				className={classes.root}
				key={product.id}
			>
				<Card
					classes={{
						root: classes.card,
					}}
					elevation={4}
				>
					<CardActionArea component={Link} to={`/rentals/${product.id}`}>
						<CardMedia image={picture} className={classes.media} />
					</CardActionArea>
					<CardContent className={classes.content}>
						<Typography gutterBottom variant="h5">
							{product.name ? product.name : product.model}
						</Typography>

						<Typography
							gutterBottom
							variant="body1"
							className={classes.description}
						>
							{product.short_description}
						</Typography>
						<Divider />
						<Grid container spacing={2} direction="row" alignItems="baseline">
							<Grid item xs={6}>
								<Typography
									className={ClassNames(
										classes.priceTitle,
										classes.prices,
										classes.firstOfType
									)}
									variant="body1"
								>
									<LocalOfferOutlinedIcon className={classes.icon} />
									one day
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography
									className={ClassNames(classes.prices, classes.priceBody)}
									variant="body1"
								>
									$ {(product.rental_day / 100).toFixed(2)}
								</Typography>
							</Grid>
						</Grid>

						<Grid container spacing={2} direction="row" alignItems="baseline">
							<Grid item xs={6}>
								<Typography
									className={ClassNames(classes.priceTitle, classes.prices)}
									variant="body1"
								>
									<LocalOfferOutlinedIcon className={classes.icon} />
									two day
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography
									className={ClassNames(classes.prices, classes.priceBody)}
									variant="body1"
								>
									$ {(product.rental_two_day / 100).toFixed(2)}
								</Typography>
							</Grid>
						</Grid>

						<Grid container spacing={2} direction="row" alignItems="baseline">
							<Grid item xs={6}>
								<Typography
									className={ClassNames(classes.priceTitle, classes.prices)}
									variant="body1"
								>
									<LocalOfferOutlinedIcon className={classes.icon} />
									week
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography
									className={ClassNames(classes.prices, classes.priceBody)}
									variant="body1"
								>
									$ {(product.rental_week / 100).toFixed(2)}
								</Typography>
							</Grid>
						</Grid>

						<Typography variant="h6" className={classes.rentNowButton}>
							Rent {product.model} now!
						</Typography>
					</CardContent>
				</Card>
			</Grid>
		);
	});

	return result;
}

const RentalsGrid = () => {
	const classes = useStyles();

	const [products, setProducts] = useState([]);
	

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios('/products/rental');
			setProducts(result.data);
		};
		fetchData();
	}, []);

	const productSection = useMemo(() => productFunc(products, classes), [
		products,
		classes,
	]);

	return (
		<>
			<Grid container spacing={4}>
				
				{productSection}
			</Grid>
		</>
	);
};

export default memo(RentalsGrid);
