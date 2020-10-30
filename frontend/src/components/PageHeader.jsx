import React, { memo } from 'react';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({

	title: {
		fontFamily: 'Roboto Black',
		width: '100%',
		height: '200px',
		backgroundColor: theme.palette.primary.light,
		color: theme.palette.gold.main,
		fontSize: '60px',
		padding: 'auto',
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
	},

}));

const PageHeader = ({title}) => {
	const classes = useStyles();
	return (
		<Grid item xs={12}>
			<Typography variant="h3" className={classes.title}>
				{title}
			</Typography>
		</Grid>
	);
};

export default memo(PageHeader);
