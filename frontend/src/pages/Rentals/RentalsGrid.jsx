import React, { useMemo, memo, useEffect, useState, useContext } from 'react';

// react router
import {
	// Switch, Route, useRouteMatch,
	Link,
} from 'react-router-dom';

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
import { KeyboardDatePicker } from '@material-ui/pickers';
import SearchIcon from '@material-ui/icons/Search';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';

// context
import { RentalContext } from '../../context/rental-context';

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
	console.log(array);

	const result = array.map((product) => {
		return (
			<Grid item xs={12} sm={6} className={classes.root} key={product.id}>
				<Card
					classes={{
						root: classes.card,
					}}
					elevation={3}
				>
					<CardActionArea component={Link} to={`/sales/${product.id}`}>
						<CardMedia image={picture} className={classes.media} />
						<Divider />
					</CardActionArea>
					<CardContent className={classes.content}>
						<Typography gutterBottom variant="h5">
							{product.name ? product.name : product.model}
						</Typography>

						<Typography variant="body1" className={classes.description}>
							{product.short_description}
						</Typography>
						<Divider />
						<Grid container spacing={2} justify="space-between">
							<Grid item>
								<Typography align="left" display="inline" variant="body1">
									<LocalOfferOutlinedIcon /> one day
								</Typography>
							</Grid>
							<Grid item>
								<Typography align="right" display="inline" variant="body1">
									{product.rental_day}
								</Typography>
							</Grid>
						</Grid>
						<Divider />
						<Grid container spacing={2} justify="space-between">
							<Grid item>
								<Typography align="left" display="inline" variant="body1">
									<LocalOfferOutlinedIcon />
									two
								</Typography>
							</Grid>
							<Grid item>
								<Typography align="right" display="inline" variant="body1">
									{product.rental_two_day}
								</Typography>
							</Grid>
						</Grid>
						<Divider />
						<Grid container spacing={2} justify="space-between">
							<Grid item>
								<Typography align="left" display="inline" variant="body1">
									<LocalOfferOutlinedIcon />
									week
								</Typography>
							</Grid>
							<Grid item>
								<Typography align="right" display="inline" variant="body1">
									{product.rental_week}
								</Typography>
							</Grid>
						</Grid>
						<Typography variant="h6">Rent {product.model} now!</Typography>
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
	const {
		rentalDates,
		startDateHandler,
		endDateHandler,
		//	getAvailableRentals,
	} = React.useContext(RentalContext);

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
				<Grid item xs sm={3}></Grid>
				<Grid item xs={12} sm={6}>
					<Typography display="inline" variant="h5">
						Search Dates:
						<KeyboardDatePicker
							className={classes.textField}
							label="Start date"
							autoOk
							variant="inline"
							value={rentalDates.startDate}
							animateYearScrolling
							onChange={(date) => startDateHandler(date)}
							placeholder="MM/DD/YYYY"
							format="MM/dd/yyyy"
							disablePast="true"
						/>
						<KeyboardDatePicker
							className={classes.textField}
							autoOk
							animateYearScrolling
							label="End date"
							variant="inline"
							value={rentalDates.endDate}
							placeholder="MM/DD/YYYY"
							onChange={(date) => endDateHandler(date)}
							format="MM/dd/yyyy"
							minDate={rentalDates.endDate}
							disablePast="true"
						/>
					</Typography>
					<Divider className={classes.divider} />
				</Grid>
				<Grid item sm={3}></Grid>
				{/* <Grid item xs={12} sm={4}>
					<Typography display="inline" variant="h5">
						Category:
						<Typography
							display="inline"
							variant="body1"
							className={classes.subtitle}
						>
                           
							{!category ? 'all available' : category}
						</Typography>
					</Typography>
					<Divider className={classes.divider} />
				</Grid> */}

				{productSection}
			</Grid>
		</>
	);
};

export default memo(RentalsGrid);
