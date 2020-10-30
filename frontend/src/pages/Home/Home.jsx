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
import Logo from '../../assets/LOGO/CleanMachineRentals_Logo-Camarone-GoldTips(2).png';

// components
import SalesBox from './SalesBox';
import RentalSearch from '../../components/RentalSearch';

// outside styles

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
	},

	titleBox: {
		backgroundColor: theme.palette.primary.light,
		margin: '5px 0 40px 0',
		borderRadius: '0',
		zIndex: '2',
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
		marginBottom: '20px',
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
		zIndex: '2',
	},

	box2: {
		position: 'relative',
		top: '-20px',
		left: '15px',
		width: 'auto',
		border: '2px solid',
		padding: ' 5px',
		zIndex: '10',
		borderColor: theme.palette.primary.light,
		backgroundColor: 'white',
		[theme.breakpoints.down('sm')]: {},
	},

	box3: {
		position: 'relative',
		top: '-40px',
		left: '820px',
		width: '60px',
		height: '40px',
		backgroundColor: theme.palette.gold.main,
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
		[theme.breakpoints.down('sm')]: {
			fontSize: '22px',
		},
	},

	mainGrid: {
		minHeight: '100%',
	},

	description: {
		padding: '30px 40px',
		textAlign: 'left',
		fontStyle: 'italic',
		fontSize: '16px',
		fontWeight: '500',
		letterSpacing: '0.1em',
	},
}));

const Home = () => {
	const classes = useStyles();

	return (
		<Container disableGutters maxWidth={false} className={classes.root}>
			<Grid container justify="center" classes={{ root: classes.mainGrid }}>
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
									<Typography variant="h3" className={classes.search}>
										Search for rental Dates
									</Typography>
									<Grid container className={classes.body}>
										<Grid item xs={12}>
											<Typography
												variant="body1"
												className={classes.description}
											>
												We are Central Florida Based Rental company. we deliver
												the rental on start date by noon. and pick up the rental
												at the end of the rental. no need to worry about
												anything but enjoying the great products we offer.
											</Typography>
										</Grid>

										<RentalSearch show={true} size={4} />
									</Grid>
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
