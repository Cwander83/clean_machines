import React from 'react';

// react router
// import {
// 	Switch,
// 	Route,
// 	 Link,
// 	useRouteMatch,
// } from 'react-router-dom';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';

// components

const useStyles = makeStyles((theme) => ({
	root: {},
}));

const CustomerRentals = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid item xs={12}>
				<Typography variant="h5">rental information</Typography>
			</Grid>
		</div>
	);
};

export default CustomerRentals;
