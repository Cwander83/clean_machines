import React from 'react';

//import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

const useStyles = makeStyles({
	timeline: {},
});

const CompanyTimeline = () => {
	const classes = useStyles();
	return (
		<Timeline align="alternate" className={classes.timeline}>
			<TimelineItem align="left">
				<TimelineSeparator>
					<TimelineDot variant="outlined" />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent></TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineDot variant="outlined" />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>check if we service your area </TimelineContent>
			</TimelineItem>

			<TimelineItem align="left">
				<TimelineSeparator>
					<TimelineDot variant="outlined" />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>search dates for rental</TimelineContent>
			</TimelineItem>
			<TimelineItem align="left">
				<TimelineSeparator>
					<TimelineDot variant="outlined" />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>checkout</TimelineContent>
			</TimelineItem>

			<TimelineItem>
				<TimelineSeparator>
					<TimelineDot variant="outlined" />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>We deliver to you before noon</TimelineContent>
			</TimelineItem>

			<TimelineItem align="left">
				<TimelineSeparator>
					<TimelineDot variant="outlined" />
				</TimelineSeparator>
				<TimelineContent>We pick up anytime til 9pm</TimelineContent>
			</TimelineItem>
		</Timeline>
	);
};

export default CompanyTimeline;
