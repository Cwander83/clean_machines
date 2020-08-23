import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
//import TextField from '@material-ui/core/TextField';
//import LocationChecker from '../LocationChecker/LocationChecker';
import { DatePicker } from '@material-ui/pickers';
import { Grid, Paper, Button } from '@material-ui/core';
import { RentalContext } from '../context/rental-context';
//import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
	},
	// paper: {
	// 	padding: theme.spacing(1),
	// 	textAlign: 'center',
	// 	color: theme.palette.text.secondary,
	// 	display: 'flex',
	// 	justifyContent: 'center',

	// 	flexShrink: 2,
	// },
	body: {
		marginBottom: '10px',
	},
	title: {},
	searchField: {
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'baseline',
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

	//console.log('inputs: ' + JSON.stringify(rentalDates, null, 2));
	return (
		<Grid container spacing={2} className={classes.body} component={Paper}>
			{/* <Grid item xs={12} className={classes.title}>
				<Typography variant="h6">STEP 2. Search for rental dates</Typography>
			</Grid> */}
			<Grid item sm></Grid>
			<Grid item xs={12} sm={6} className={classes.searchField}>
				<DatePicker
					className={classes.textField}
					label="start Date"
					clearable
					value={rentalDates.startDate}
					variant="dialog"
					onChange={(date) => startDateHandler(date)}
					placeholder="MM/DD/YYYY"
					format="MM/dd/yyyy"
					disablePast="true"
				/>

				<DatePicker
					className={classes.textField}
					clearable
					label="end date"
					value={rentalDates.endDate}
					placeholder="MM/DD/YYYY"
					onChange={(date) => endDateHandler(date)}
					format="MM/dd/yyyy"
					minDate={rentalDates.endDate}
					disablePast="true"
				/>
				<Button
					component={Link}
					variant="outlined"
					to="/rentals"
					onClick={getAvailableRentals}
					disabled={rentalDates.startDate === null}
				>
					Search
				</Button>
			</Grid>
			<Grid item sm></Grid>

			{/* <LocationChecker /> */}
		</Grid>
	);
};

export default RentalSearch;
