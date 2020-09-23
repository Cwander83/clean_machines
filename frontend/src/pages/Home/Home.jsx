import React from 'react';
//import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
//import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import CompanyTimeline from '../../components/CompanyTimeLine';

import Logo from '../../assets/LOGO/CleanMachineRentals_Logo-White.png';

import DemoCarousel from '../../components/Carousels/DemoCarousel';

const useStyles = makeStyles((theme) => ({
	root: {},
	titleBox: {
		backgroundColor: theme.palette.primary.main,
		borderTopLeftRadius: '50%',
		borderTopRightRadius: '50%',
	},
	logo: {
		width: '50%',
	},

	image: {
		maxHeight: '200px',
	},
	sliderGrid: {
		marginBottom: '30px',

		border: `10px solid ${theme.palette.primary.main}`,
	},
	aboutImage: {
		border: `1px solid ${theme.palette.primary.main}`,
	}
}));

const Home = () => {
	const classes = useStyles();

	return (
		<Container className={classes.root} maxWidth="lg">
			<Grid container justify="center">
				<Grid item xs={12} sm={10} className={classes.titleBox}>
					<img
						className={classes.logo}
						src={Logo}
						alt="clean machine rentals"
					/>
				</Grid>
				<Grid item xs={3} className={classes.aboutText}>
					<h2>about</h2>
				</Grid>
				<Grid item xs={7} className={classes.aboutImage}>
					<h2>about</h2>
				</Grid>
				<Grid item xs={12} sm={10} className={classes.sliderGrid}>
					<DemoCarousel />
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
