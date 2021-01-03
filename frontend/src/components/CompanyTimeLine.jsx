import React, { memo } from 'react';

//import { Link } from 'react-router-dom';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CheckIcon from '@material-ui/icons/Check';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

const useStyles = makeStyles((theme) => ({
	timeline: {
		textTransform: 'Capitalize',
	},
	checkIcon: {
		backgroundColor: theme.palette.gold.main,
	},
	shoppingCartIcon: {
		backgroundColor: theme.palette.primary.main,
	},
	truckIcon: {
		backgroundColor: theme.palette.primary.light,
	},
}));

const CompanyTimeline = () => {
	const classes = useStyles();
	return (
		<Timeline align="alternate" className={classes.timeline}>
			<TimelineItem align="left">
				<TimelineOppositeContent>
					<Typography variant="body2" color="textSecondary">
						step 1
					</Typography>
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot className={classes.shoppingCartIcon}>
						<ShoppingCartIcon />
					</TimelineDot>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent
					style={{
						textAlign: 'left',
					}}
				>
					Checkout with your Rentals
				</TimelineContent>
			</TimelineItem>

			<TimelineItem>
				<TimelineOppositeContent>
					<Typography variant="body2" color="textSecondary">
						step 2
					</Typography>
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot className={classes.truckIcon}>
						<LocalShippingIcon />
					</TimelineDot>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>We Deliver To You Before Noon</TimelineContent>
			</TimelineItem>

			<TimelineItem align="left">
				<TimelineOppositeContent>
					<Typography variant="body2" color="textSecondary">
						step 3
					</Typography>
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot className={classes.checkIcon}>
						<CheckIcon />
					</TimelineDot>
				</TimelineSeparator>
				<TimelineContent
					style={{
						textAlign: 'left',
					}}
				>
					We Pick Up Anytime Til 9PM{' '}
				</TimelineContent>
			</TimelineItem>
		</Timeline>
	);
};

export default memo(CompanyTimeline);
