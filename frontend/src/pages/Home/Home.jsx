import React from 'react';

// react router
//import { Link } from 'react-router-dom';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

// images / icons
import Logo from '../../assets/LOGO/CleanMachineRentals_Logo-Camarone-GoldTips(2).png';

// components
import SalesBox from './SalesBox';
import RentalSearch from '../../components/RentalSearch';
import Container from '../../containers/Container';
import CompanyTimeLine from '../../components/CompanyTimeLine';

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
		height: '200px',
		justifyContent: 'center',
		alignItems: 'center',
		display: 'flex',
	},

	section: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
	},

	boxTitle: {
		textTransform: 'Capitalize',
		fontSize: '26px',
		padding: '25px 0',
		width: '100%',
		fontFamily: theme.typography.fontFamily.yellowTail,
		fontWeight: '400',
		letterSpacing: '.07em',
		color: theme.palette.gold.main,
		backgroundColor: theme.palette.primary.light,
		[theme.breakpoints.down('sm')]: {
			fontSize: '22px',
		},
	},

	logo: {
		marginTop: 'auto',
		marginBottom: 'auto',
		width: '30%',
		maxWidth: '425px',
		[theme.breakpoints.down('sm')]: {
			width: '60%',
		},
		[theme.breakpoints.down('xs')]: {
			width: '75%',
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

	mainGrid: {
		minHeight: '100%',
	},

	description: {
		padding: '30px 40px',
		textAlign: 'left',
		//fontStyle: 'italic',
		fontSize: '16px',
		fontWeight: '500',
		letterSpacing: '0.1em',
	},
}));

const Home = () => {
	const classes = useStyles();

	return (
		<Container>
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
									<Typography variant="h6" className={classes.boxTitle}>
										Search for rental Dates
									</Typography>
									<Grid container className={classes.body}>
										<Grid item xs={12}>
											<CompanyTimeLine />
										</Grid>
										<Grid item xs={12} sm={2}></Grid>
										<Grid item xs={12} sm={8}>
											<RentalSearch show={true} size={5} buttonSize={2} />
										</Grid>
										<Grid item xs={12} sm={2}></Grid>
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
									<Typography variant="h6" className={classes.boxTitle}>
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
