import React from 'react';

// react router
import { Link } from 'react-router-dom';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import { KeyboardDatePicker } from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

// context
import { RentalContext } from '../context/rental-context';

// components

const useStyles = makeStyles((theme) => ({
	textField: {
		margin: `auto`,
		width: '90%',
		color: theme.palette.primary.light,
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
		},
	},

	button: {
		margin: 'auto',
		marginTop: '10px',
		fontSize: '16px',
		backgroundColor: theme.palette.primary.light,
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

	searchSection: {
		marginBottom: '30px',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
		},
	},
	disabled: {
		backgroundColor: theme.palette.grey.main,
	},
}));

const RentalSearch = ({ show, size, buttonSize, direction, space }) => {
	const classes = useStyles(space);

	const { rentalDates, startDateHandler, endDateHandler } = React.useContext(
		RentalContext
	);

	return (
		<>
			<Grid item sm={1}></Grid>

			<Grid item xs={12}>
				<Grid
					container
					alignItems="center"
					direction={direction ? direction : 'row'}
					classes={{ root: classes.searchSection }}
				>
					<Grid item xs={12} sm={size}>
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
							style={{
								marginTop: space,
								marginBottom: space,
							}}
						/>
					</Grid>
					<Grid item xs={12} sm={size}>
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
							minDate={rentalDates.startDate}
							disablePast="true"
							style={{
								marginTop: space,
								marginBottom: space,
							}}
						/>
					</Grid>
					{show ? (
						<Grid item xs={12} sm={buttonSize} className={classes.buttonGrid}>
							<Button
								classes={{
									label: classes.buttonLabel,
									disabled: classes.disabled,
								}}
								className={classes.button}
								component={Link}
								variant="outlined"
								to="/rentals"
								disabled={rentalDates.endDate === null}
							>
								Search
								<SearchIcon style={{ marginLeft: '5px' }} />
							</Button>
						</Grid>
					) : null}
				</Grid>
			</Grid>
			<Grid item sm={1}></Grid>
		</>
	);
};

export default RentalSearch;
