import React from 'react';

import ClassNames from 'classnames';

import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		border: '1px solid black',
	},
	title: {
		width: '100%',
		padding: '20px',
		backgroundColor: theme.palette.primary.light,
		color: theme.palette.gold.main,
		[theme.breakpoints.down('xs')]: {
			fontSize: '18px',
		},
	},
	text: {
		marginTop: '20px',
	},
	text2: {
		marginTop: '5px',
		marginBottom: '20px',
	},
	body: {
		width: '100%',
		paddingLeft: '10px',
		paddingRight: '10px',

		[theme.breakpoints.down('xs')]: {
			fontSize: '16px',
		},
	},
}));

const SuccessMessage = ({ orderNumber }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Typography variant="h4" className={classes.title}>
				Thank You for Your Business!
			</Typography>
			<Typography
				variant="h6"
				className={ClassNames(classes.text, classes.body)}
			>
				Your order #{orderNumber} is being processed!
			</Typography>
			<Typography
				variant="h6"
				className={ClassNames(classes.text2, classes.body)}
			>
				Please check your email for receipt.
			</Typography>
		</div>
	);
};

export default SuccessMessage;
