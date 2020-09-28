import React from 'react';

// react router
import { Link } from 'react-router-dom';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import { DatePicker } from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

// context
import { RentalContext } from '../../context/rental-context';

// components

const useStyles = makeStyles((theme) => ({
	textField: {
		width: '60%',
		margin: 'auto',
	},

	body: {
		//marginBottom: '10px',
	},
	button: {
		margin: 'auto',
		width: '35%',
		backgroundColor: theme.palette.primary.light,
	},
	buttonLabel: {
		color: theme.palette.gold.main,
	},
	title: {},
	searchField: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignContent: 'center',
	},
	description: {},
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
		<Grid container className={classes.body}>
			<Grid item xs={12} sm={6}>
				<Typography variant="body1" className={classes.description}>
					We are Central Florida Based Rental company. we deliver the rental on
					start date by noon. and pick up the rental at the end of the rental.
					no need to worry about anything but enjoying the great products we
					offer.
				</Typography>
			</Grid>
			{/* <Divider orientation="vertical" /> */}

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
				</Button>
			</Grid>
		</Grid>
	);
};

export default RentalSearch;
