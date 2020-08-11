import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
//import TextField from '@material-ui/core/TextField';
//import LocationChecker from '../LocationChecker/LocationChecker';
import { DatePicker, Calendar } from '@material-ui/pickers';
import { Grid, Paper, Button } from '@material-ui/core';
import { RentalContext } from '../../context/rental-context';
//import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));

const RentalSearch = () => {
	const classes = useStyles();

	function disableRandomDates() {
		return Math.random() > 0.7;
	}

	const {
		rentalDates,
		startDateHandler,
		endDateHandler,
		getAvailableRentals,
	} = React.useContext(RentalContext);

	console.log('inputs: ' + JSON.stringify(rentalDates, null, 2));
	return (
		<>
			<Grid item xs={12}>
				<Paper className={classes.paper}>
					<DatePicker
						label="start Date"
						clearable
						value={rentalDates.startDate}
						variant="dialog"
						onChange={(date) => startDateHandler(date)}
						//minDate={rentalDates.startDate}
							
						format="MM/dd/yyyy"
						disablePast="true"
						shouldDisableDate={disableRandomDates}
					/>

					<DatePicker
						clearable
						label="end date"
						value={rentalDates.endDate}
						placeholder="MM/DD/YYYY"
						onChange={(date) => endDateHandler(date)}
						format="MM/dd/yyyy"
						minDate={rentalDates.endDate}
						disablePast="true"
						shouldDisableDate={disableRandomDates}
					/>
					<Button component={Link} to="/rentals" onClick={getAvailableRentals}>
						Search rentals
					</Button>
				</Paper>
			</Grid>
			{/* <LocationChecker /> */}
		</>
	);
};

export default RentalSearch;
