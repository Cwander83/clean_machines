import React, { useMemo, memo, useEffect, useState, useContext } from 'react';

// react router
import { Link } from 'react-router-dom';

// classnames
import ClassNames from 'classnames';

// axios
import axios from 'axios';

// moment
import moment from 'moment';

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
import { RentalContext } from '../../context/rental-context';

// components
import RentalSearch from '../../components/RentalSearch';
import CompanyTimeline from '../../components/CompanyTimeLine';

// images

// ui
//import Spinner from '../../UI/Spinner';

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
		color: theme.palette.grey.main,
		paddingBottom: '0px',
		backgroundColor: theme.palette.primary.light,
	},
	productDescription: {
		color: theme.palette.gold.main,
	},
	prices: {
		color: theme.palette.gold.main,
		textTransform: 'Capitalize',
		fontWeight: 500,
	},
	divider: {
		backgroundColor: theme.palette.gold.main,
	},
	divider2: {
		marginBottom: '10px',
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
	description: {
		padding: '30px 40px 20px 40px',
		textAlign: 'left',
		fontStyle: 'italic',
		fontSize: '16px',
		fontWeight: '500',
		letterSpacing: '0.12em',
	},
	searchTitle: {
		marginTop: '10px',
		marginBottom: '20px',
	},
}));

function productFunc(array, classes) {
	if (!array) {
		return [];
	}
	//console.log(array);

	const result = array.map((product) => {
		let imageUrl = `https://products.oss.nodechef.com/${product.model}-1.jpg`;
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
						<CardMedia image={imageUrl} className={classes.media} />
					</CardActionArea>
					<CardContent className={classes.content}>
						<Typography gutterBottom variant="h5">
							{product.name ? product.name : product.model}
						</Typography>

						<Typography
							gutterBottom
							variant="body1"
							className={classes.shortDescription}
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

	let { rentalDates } = useContext(RentalContext);

	useEffect(() => {
		//	console.log('rental Dates: ' + JSON.stringify(rentalDates, null, 2));

		if (rentalDates.startDate !== null && rentalDates.endDate !== null) {
		//	console.log('inside if statement');

			let start = moment(rentalDates.startDate).format('YYYY-MM-DD');
			let end = moment(rentalDates.endDate).format('YYYY-MM-DD');

			const fetchData = async () => {
				const results = await axios(`/api/rentals/available-rent/${start}/${end}`);

				setProducts(results.data);
			};

			fetchData();
		}
	}, [rentalDates]);

	//console.log(JSON.stringify(products, null, 2));

	const productSection = useMemo(() => productFunc(products, classes), [
		products,
		classes,
	]);

	return (
		<>
			<Grid item xs={12}>
				<Grid container>
					<Grid item md={1}></Grid>
					<Grid item xs={12} md={5}>
						<CompanyTimeline />
					</Grid>

					<Grid item xs={12} md={5}>
						<Typography variant="h4" className={classes.searchTitle}>
							Search Rental Dates
						</Typography>

						<RentalSearch
							show={false}
							size={6}
							buttonSize={0}
							direction="column"
							space="10px"
						/>
					</Grid>
					<Grid item md={1}></Grid>
				</Grid>
			</Grid>
			<Divider className={classes.divider2} />

			<Grid container spacing={4} className={classes.body}>
				{
					// products.length === 0 ? (
					// 	<Grid item xs={12}>
					// 		<Spinner />
					// 	</Grid>
					// ) : (
					productSection
					//)
				}
			</Grid>
		</>
	);
};

export default memo(RentalsGrid);
