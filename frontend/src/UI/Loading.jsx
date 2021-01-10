import React from 'react';

// material ui
import { makeStyles } from '@material-ui/core/styles';

import ReactLoading from 'react-loading';

const useStyles = makeStyles((theme) => ({
	loading: {
		margin: 'auto',

		color: 'gold',
	},
}));

const Loading = () => {
	const classes = useStyles();
	return (
		<ReactLoading
			type={'spinningBubbles'}
			className={classes.loading}
			width={'50%'}
			height={'50%'}
		/>
	);
};

export default Loading;
