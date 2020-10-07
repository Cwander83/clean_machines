import React from 'react';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		zIndex: 100,
		backgroundColor: 'rgba(0,0,0,0.2)',
		top: 0,
		left: 0,
	},
	circle: {
		margin: 'auto',
	},
}));

const Loading = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<CircularProgress
				size="10rem"
				classes={{ root: classes.circle }}
				color="primary"
			/>
		</div>
	);
};

export default Loading;
