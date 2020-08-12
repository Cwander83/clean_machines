import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
//import TextField from '@material-ui/core/TextField';
//import LocationChecker from '../LocationChecker/LocationChecker';
import { DatePicker } from '@material-ui/pickers';
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
		padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'baseline',
		flexShrink: 2,
	},
	body: {
		marginBottom: '10px'
	}
}));

const RentalSearch = () => {
	const classes = useStyles();

	const {
		rentalDates,
		startDateHandler,
		endDateHandler,
		getAvailableRentals,
	} = React.useContext(RentalContext);

	console.log('inputs: ' + JSON.stringify(rentalDates, null, 2));
	return (
		<Grid container spacing={2} className={classes.body}>
			<Grid item sm></Grid>
			<Grid item xs={10} sm={9}>
				<Paper className={classes.paper}>
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
					<Button component={Link} to="/rentals" onClick={getAvailableRentals}>
						Search
					</Button>
				</Paper>
			</Grid>
			<Grid item sm></Grid>

			{/* <LocationChecker /> */}
		</Grid>
	);
};

export default RentalSearch;
