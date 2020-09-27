import React from 'react';
//import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import Logo from '../../assets/LOGO/CleanMachineRentals_Logo-Camarone-GoldTips(2).png';

import SalesBox from './SalesBox';

import '../../styles/Home.css';

const useStyles = makeStyles((theme) => ({
	root: {},
	titleBox: {
		backgroundColor: theme.palette.primary.light,
		margin: '30px 0 40px 0',
		borderRadius: '0',
	},

	section2: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	logo: {
		width: '30%',
	},
	boxes: {
		[theme.breakpoints.down('sm')]: {
			width: '100%',
		},

		width: '50%',
		margin: 'auto',
	},

	box1: {
		position: 'relative',
		width: '60px',
		height: '40px',
		backgroundColor: theme.palette.primary.light,
	},
	box2: {
		position: 'relative',
		top: '-20px',
		left: '15px',
		width: 'auto',
		//height: 'auto',
		border: '2px solid',
		padding: '5px 0',
		zIndex: '10',
		borderColor: theme.palette.primary.light,
		backgroundColor: 'white',
		cursor: 'pointer',
		[theme.breakpoints.down('sm')]: {},
	},
	boxSubtitle: {
		fontWeight: '400',
		letterSpacing: '.05em',
	},

	box3: {
		position: 'relative',
		top: '-40px',
		left: '280px',
		width: '60px',
		height: '40px',

		backgroundColor: theme.palette.gold.main,
	},
}));

const Home = () => {
	const classes = useStyles();

	//const [salesList, setSalesList] = React.useState(false);
	//const [rentalList, setRentalList] = React.useState(false);

	//const closeSalesList = () => setSalesList(false);

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
				<Grid item xs={12} className={classes.section1}>
					{/* <Typography variant="h4">BROWSE OUR</Typography>
					<Typography variant="h4">IINVENTORIES</Typography> */}
				</Grid>
				<Grid item xs={10} className={classes.section2}>
					<Grid container spacing={2} justify="center">
						<Grid item xs={12}>
							<Box className={classes.boxes}>
								<Box
									className={classes.box1}
									component={Paper}
									elevation={2}
								></Box>
								<Box className={classes.box2} component={Paper} elevation={2}>
									<Typography variant="h3" className={classes.boxSubtitle}>
										SALES
									</Typography>
									<SalesBox />
								</Box>
								<Box
									className={classes.box3}
									component={Paper}
									elevation={2}
								></Box>
							</Box>
						</Grid>
						{/* <Grid item xs={12} sm={12} md={6}>
							<Box className={classes.boxes}>
								<Box
									className={classes.box1}
									component={Paper}
									elevation={2}
								></Box>
								<Box className={classes.box2} component={Paper} elevation={2}>
									<Typography variant="h3" className={classes.imageTitle}>
										Rentals
									</Typography>
								</Box>
								<Box
									className={classes.box3}
									component={Paper}
									elevation={2}
								></Box>
							</Box>
						</Grid> */}
					</Grid>
				</Grid>
				{/* <Grid item xs={12} className={classes.productSectionTitle}>
					<Typography variant="h4"></Typography>
				</Grid>
				<Grid item xs={10}>
					<DemoCarousel />
				</Grid> */}

				{/* <Grid item xs={10}>
					<Typography variant="h4">Check out our</Typography>
					<Typography variant="h4">Inventory</Typography>
					<DemoCarousel />
				</Grid> */}

				{/* <Grid item xs={12}>
					<Typography variant="h4">How to rent</Typography>
					<CompanyTimeline />
				</Grid> */}
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
