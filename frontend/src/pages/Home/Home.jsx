import React from 'react';

// react router
//import { Link } from 'react-router-dom';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

// images / icons
import Logo from '../../assets/LOGO/CleanMachineRentals_Logo-Camarone-GoldTips(2).png'

// components
import SalesBox from './SalesBox';
import RentalSearch from './RentalSearch';

// outside styles

const useStyles = makeStyles((theme) => ({
	root: {},
	titleBox: {
		backgroundColor: theme.palette.primary.light,
		margin: '5px 0 40px 0',
		borderRadius: '0',
	},

	section: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	slogan: {
		textTransform: 'Capitalize',
		fontSize: '24px',
		padding: '15px 0 ',
		width: '100%',
		fontWeight: '400',
		letterSpacing: '.05em',
		color: theme.palette.gold.main,
		backgroundColor: theme.palette.primary.light,
	},
	logo: {
		width: '30%',
		[theme.breakpoints.down('sm')]: {
			width: '40%',
		},
	},
	boxes: {
		[theme.breakpoints.down('sm')]: {},
		margin: 'auto',
	},

	box1: {
		position: 'relative',
		width: '60px',
		height: '40px',
		backgroundColor: theme.palette.gold.main,
	},
	box2: {
		position: 'relative',
		top: '-20px',
		left: '15px',
		width: 'auto',
		//height: 'auto',
		border: '2px solid',
		padding: ' 5px',
		zIndex: '10',
		borderColor: theme.palette.primary.light,
		backgroundColor: 'white',
		//cursor: 'pointer',
		[theme.breakpoints.down('sm')]: {},
	},
	boxSubtitle: {
		paddingLeft: '1px',
		width: '100%',
		fontWeight: '400',
		letterSpacing: '.05em',
		backgroundColor: theme.palette.primary.light,
	},

	box3: {
		position: 'relative',
		top: '-40px',
		left: '820px',
		width: '60px',
		height: '40px',

		backgroundColor: theme.palette.gold.main,
	},
	rentalLink: {
		textTransform: 'Capitalize',
		fontSize: '24px',
		padding: '15px 0',
		width: '100%',
		fontWeight: '400',
		letterSpacing: '.07em',
		color: theme.palette.gold.main,
		backgroundColor: theme.palette.primary.light,
	},
	span: {
		fontSize: '28px',
		fontFamily: 'YellowTail',
	},
	search: {
		textTransform: 'Capitalize',
		fontSize: '24px',
		padding: '15px 0',
		width: '100%',
		fontWeight: '400',
		letterSpacing: '.07em',
		color: theme.palette.gold.main,
		backgroundColor: theme.palette.primary.light,
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

				<Grid item xs={10} className={classes.section}>
					<Grid container spacing={2} justify="center">
						<Grid item xs={12} sm={10}>
							<Box className={classes.boxes}>
								<Box
									className={classes.box1}
									component={Paper}
									elevation={2}
								></Box>
								<Box className={classes.box2} component={Paper} elevation={2}>
									<Typography variant="h3" className={classes.rentalLink}>
										Click here to view all available Rentals
									</Typography>
									<Typography variant="body1" className={classes.span}>
										or
									</Typography>
									<Typography variant="h3" className={classes.search}>
										Search for rental Dates
									</Typography>
									<RentalSearch />
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12}>
							<Box className={classes.boxes}>
								<Box
									className={classes.box1}
									component={Paper}
									elevation={2}
								></Box>
								<Box className={classes.box2} component={Paper} elevation={2}>
									<Typography variant="h3" className={classes.slogan}>
										browse our award winning products!
									</Typography>
									<SalesBox />
								</Box>
								
							</Box>
						</Grid>
					</Grid>
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
