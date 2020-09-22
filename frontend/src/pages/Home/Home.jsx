import React from 'react';
//import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
//import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

//import RentalSearch from '../../components/RentalSearch';
import CompanyTimeline from '../../components/CompanyTimeLine';

import Logo from '../../assets/LOGO/CleanMachineRentals_Logo-White.png';
import BGH15E from '../../images/BGH15E.jpg';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
	root: {},
	titleBox: {
		backgroundColor: theme.palette.primary.main,
	},
	logo: {
		width: '60%',
	},
	carousel: {
		height: 'auto',

		color: 'white',
	},
	image: {
		width: '60px',
	},
	root: {
		position: 'relative',
	},
	slide: {
		padding: '15px',
		minHeight: '100px',
		color: '#fff',
	},
	slide1: {
		backgroundColor: '#FEA900',
	},
	slide2: {
		backgroundColor: '#B3DC4A',
	},
	slide3: {
		backgroundColor: '#6AC0FF',
	},
}));

const Home = () => {
	//const [checkout, setCheckout] = React.useState(false);
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const onChange = (value) => {
		setValue(value);
	};

	return (
		<Container className={classes.root} maxWidth="lg">
			<Grid container justify="center" spacing={2}>
				<Grid item xs={12}>
					<AutoPlaySwipeableViews
						interval={3000}
						index={value}
						onChangeIndex={onChange}
					>
						<div className={classes.slide1}>slide n°1</div>
						<div className={classes.slide2}>slide n°2</div>
						<div className={classes.slide3}>slide n°3</div>
					</AutoPlaySwipeableViews>
				</Grid>
				<Grid item xs={12} sm={6} className={classes.titleBox}>
					<img
						className={classes.logo}
						src={Logo}
						alt="clean machine rentals"
					/>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="h4">about the company</Typography>
				</Grid>
				<Grid item xs={12} component={Paper}>
					<Typography variant="h4">How to rent</Typography>
					<CompanyTimeline />
				</Grid>
			</Grid>
		</Container>
	);
};

export default Home;

// TODO
// * LANDING
// * DESC OF COMPANY
// * HOW THE RENTALS WORK
// * SEARCH FOR RENTALS
// * SHOW TOP SELLING PRODUCT
// * DEMO VIDEOS
