import React from 'react';

// react router
import {
	Switch,
	Route,
	// Link,
	useRouteMatch,
} from 'react-router-dom';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';

// components

const useStyles = makeStyles((theme) => ({
	root: {},
}));

const CustomerSales = () => {
	return (
		<Grid item xs={12}>
			<Typography variant="h5">sales information</Typography>
		</Grid>
	);
};

export default CustomerSales;
