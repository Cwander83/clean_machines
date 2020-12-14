import React, {useState} from 'react';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// components
import LocationChecker from '../../components/LocationChecker';
//import RentalSearch from '../../components/RentalSearch';
import RentalCategory from '../../components/RentalCategory';


const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	button: {
		marginTop: theme.spacing(1),
		marginRight: theme.spacing(1),
	},
	actionsContainer: {
		marginBottom: theme.spacing(2),
	},
	resetContainer: {
		padding: theme.spacing(3),
	},
	label: {
		textAlign: 'left'
	}
}));

function getSteps() {
	return [
		'check if service your area',
		'pick rental dates',
		'choose a category',
	];
}

function getStepContent(step) {
	switch (step) {
		case 0:
			return <LocationChecker />;
		// case 1:
		// 	return <RentalSearch />;
		case 2:
			return <RentalCategory />;
		default:
			throw new Error('Unknown step');
	}
}

export default function RentalStepper() {
	const classes = useStyles();
	const [activeStep, setActiveStep] = useState(0);
	const steps = getSteps();

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<div className={classes.root}>
			<Stepper activeStep={activeStep} orientation="vertical">
				{steps.map((label, index) => (
					<Step key={label}>
						
							<StepLabel className={classes.label}>{label}</StepLabel>
							<StepContent>
								{getStepContent(index)}
								<div className={classes.actionsContainer}>
									<div>
										<Button
											disabled={activeStep === 0}
											onClick={handleBack}
											className={classes.button}
										>
											Back
										</Button>
										<Button
											variant="contained"
											color="primary"
											onClick={handleNext}
											className={classes.button}
										>
											{activeStep === steps.length - 1 ? 'Find Rentals' : 'Next'}
										</Button>
									</div>
								</div>
							</StepContent>
						
					</Step>
				))}
			</Stepper>
			{activeStep === steps.length && (
				<Paper square elevation={0} className={classes.resetContainer}>
					<Typography>All steps completed - you&apos;re finished</Typography>
					<Button onClick={handleReset} className={classes.button}>
						Reset
					</Button>
				</Paper>
			)}
		</div>
	);
}
