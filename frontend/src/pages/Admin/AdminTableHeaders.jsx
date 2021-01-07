import React, { memo } from 'react';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	title: {
	
		backgroundColor: theme.palette.primary.light,
		color: theme.palette.gold.main,
		letterSpacing: '.1rem',
		padding: '15px',
	
	},
}));

const AdminTableHeaders = ({ title }) => {
	const classes = useStyles();
	return (
		<Typography variant="h4" className={classes.title}>
			{title}
		</Typography>
	);
};

export default memo(AdminTableHeaders);
