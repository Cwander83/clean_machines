import React from 'react';
//import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';

import Logo from '../../assets/LOGO/CleanMachineRentals_Logo-Camarone-GoldTips(2).png';
import image1 from '../../images/697ActionA.jpg';
import image2 from '../../images/BGU1937TontheBeach.JPG'

import DemoCarousel from '../../components/Carousels/DemoCarousel';

import CompanyTimeline from '../../components/CompanyTimeLine';


const useStyles = makeStyles((theme) => ({
	root: {},
	titleBox: {
		backgroundColor: theme.palette.primary.light,
		margin: '30px 0 40px 0',
		// borderTopLeftRadius: '50%',
		// borderTopRightRadius: '50%',
		// borderBottomLeftRadius: '8px',
		// borderBottomRightRadius: '8px',
	},
	productBox: {
		//backgroundColor: theme.palette.primary.light,
		margin: '30px 0 40px 0',
		// borderTopLeftRadius: '50%',
		// borderTopRightRadius: '50%',
		// borderBottomLeftRadius: '8px',
		// borderBottomRightRadius: '8px',
		//height: '400px' 
	},
	productSection: {
		//	display: 'flex',
		//backgroundColor: theme.palette.primary.light,
		//margin: '30px 0 40px 0',
		borderTopLeftRadius: '50%',
		borderTopRightRadius: '50%',
		// borderBottomLeftRadius: '8px',
		// borderBottomRightRadius: '8px',
		maxHeight: '400px'
		
	},
	logo: {
		width: '30%',
	},
	section: {
		height: '800px',
		//	backgroundColor: theme.palette.grey.main,
	},

	image: {
		//maxHeight: '200px',
		width: '100%',
	},
	sliderGrid: {
		backgroundColor: theme.palette.primary.main,
		//marginBottom: '30px',
		//	border: `10px solid ${theme.palette.primary.main}`,
		//	marginTop: '40px',
		display: 'flex',
		justifyContent: 'center',
		padding: '30px',
	},
	aboutImage: {
		//border: `1px solid ${theme.palette.primary.light}`,
	},
	card1: {
		height: '300px',
		marginTop: '20px',
		border: '1px solid black',
		zIndex: '4',
		backgroundImage: `url(${image1})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		
	},
	card2: {
		height: '300px',
		marginTop: '20px',
		border: '1px solid black',
		zIndex: '4',
		backgroundImage: `url(${image2})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
}));

const Home = () => {
	const classes = useStyles();

	return (
		<Container disableGutters maxWidth={false}>
			<Grid container justify="center">
				<Grid
					item
					xs={12}
					className={classes.titleBox}
					component={Paper}
					elevation={3}
				>
					<img
						className={classes.logo}
						src={Logo}
						alt="clean machine rentals"
					/>
				</Grid>
				<Grid xs={12} className={classes.productSectionTitle}>
							<Typography variant="h4">Explore our inventories </Typography>
						</Grid>
				<Grid item xs={10} className={classes.productSection}>
					<Grid container>
						

						<Grid item xs={1}></Grid>
						<Grid item xs={4}>
							<Card
							raised className={classes.card1}>
								<Typography variant="h4">Explore our inventories </Typography>
							</Card>
						</Grid>
						<Grid item xs={2}></Grid>
						<Grid item xs={4}>
							<Card 
							raised
							className={classes.card2}>
								<Typography variant="h4">Explore our inventories </Typography>
							</Card>
						</Grid>
						<Grid item xs={1}></Grid>
					</Grid>
				</Grid>

				{/* <Grid item xs={10}>
					<Typography variant="h4">Check out our</Typography>
					<Typography variant="h4">Inventory</Typography>
					<DemoCarousel />
				</Grid> */}

				<Grid item xs={12}>
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
