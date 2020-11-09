import React from 'react';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles1 = makeStyles((theme) => ({
	title: {
		marginLeft: '25%',
		marginRight: '5px',
	},
	grid: {
		textAlign: 'left',
	},
}));

const ShippingChild = ({ customer, address = customer.address }) => {
	const classes = useStyles1();

	return (
		<Grid container spacing={2}>
			{address && (
				<>
					<Grid item xs={12} className={classes.grid}>
						<Typography variant="h6" display="inline" className={classes.title}>
							billing line 1:
						</Typography>
						<Typography variant="h6" display="inline">
							{address.line1}
						</Typography>
					</Grid>
					<Grid item xs={12} className={classes.grid}>
						<Typography variant="h6" display="inline" className={classes.title}>
							billing line 2:
						</Typography>
						<Typography variant="h6" display="inline">
							{address.line2}
						</Typography>
					</Grid>
					<Grid item xs={12} className={classes.grid}>
						<Typography variant="h6" display="inline" className={classes.title}>
							billing city:
						</Typography>
						<Typography variant="h6" display="inline">
							{address.city}
						</Typography>
					</Grid>
					<Grid item xs={12} className={classes.grid}>
						<Typography variant="h6" display="inline" className={classes.title}>
							billing state:
						</Typography>
						<Typography variant="h6" display="inline">
							{address.state}
						</Typography>
					</Grid>
					<Grid item xs={12} className={classes.grid}>
						<Typography variant="h6" display="inline" className={classes.title}>
							billing zipcode:
						</Typography>
						<Typography variant="h6" display="inline">
							{address.postal_code}
						</Typography>
					</Grid>
				</>
			)}
		</Grid>
	);
};

export default ShippingChild;
