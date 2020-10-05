import React from 'react';

// react router
import { Link } from 'react-router-dom';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import { KeyboardDatePicker } from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';

// context
import { RentalContext } from '../../context/rental-context';

// components

const useStyles = makeStyles((theme) => ({
	textField: {
		margin: 'auto ',
		width: '90%',
		color: theme.palette.primary.light,
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
		},
	},

	body: {},
	button: {
		margin: 'auto',
		fontSize: '16px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '16px',
			marginTop: '5px',
		},
		[theme.breakpoints.down('xs')]: {
			marginTop: '15px',
		},
		
	},

	buttonLabel: {
		color: theme.palette.gold.main,
	},
	title: {},

	label: {
		marginTop: 'auto',
	},

	description: {
		padding: '30px 40px',
		textAlign: 'left',
		fontStyle: 'italic',
		fontSize: '16px',
		fontWeight: '500',
		letterSpacing: '0.1em',
	},
	searchSection: {
		marginBottom: '30px',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
		},
	},
}));

const RentalSearch = () => {
	const classes = useStyles();

	const {
		rentalDates,
		startDateHandler,
		endDateHandler,
		getAvailableRentals,
	} = React.useContext(RentalContext);

	return (
		<Grid container className={classes.body}>
			<Grid item xs={12}>
				<Typography variant="body1" className={classes.description}>
					We are Central Florida Based Rental company. we deliver the rental on
					start date by noon. and pick up the rental at the end of the rental.
					no need to worry about anything but enjoying the great products we
					offer.
				</Typography>
			</Grid>
			<Grid item xs sm={1}></Grid>

			<Grid item xs={12} sm={10}>
				<Grid
					container
					alignItems="center"
					classes={{ root: classes.searchSection }}
				>
					<Grid item xs={1}></Grid>
					<Grid item xs={12} sm={4}>
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
					</Grid>
					<Grid item xs={12} sm={4}>
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
					</Grid>
					<Grid item sx={12} sm={2}>
						<Button
							classes={{
								label: classes.buttonLabel,
							}}
							className={classes.button}
							component={Link}
							variant="outlined"
							to="/rentals"
							onClick={getAvailableRentals}
							disabled={rentalDates.startDate === null}
						>
							Search
							<SearchIcon style={{ marginLeft: '5px' }} />
						</Button>
					</Grid>

					<Grid item xs={1}></Grid>
				</Grid>
			</Grid>
			<Grid item xs sm={1}></Grid>
		</Grid>
	);
};

export default RentalSearch;
