import React, { useContext } from 'react';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// context api
import { AdminContext } from '../../../context/admin-context';

const useStyles1 = makeStyles((theme) => ({
	title: {
		marginLeft: '25%',
		marginRight: '5px',
	},
	grid: {
		textAlign: 'left',
	},
}));

const CustomerBilling = () => {
	const classes = useStyles1();

	let { customer, address = customer.address } = useContext(AdminContext);

	return (
		<Grid container spacing={1}>
			<Grid item xs={12} className={classes.grid}>
				<Typography
					variant="subtitle2"
					display="inline"
					className={classes.title}
				>
					name:
				</Typography>
				<Typography variant="subtitle1" display="inline">
					{customer.name}
				</Typography>
			</Grid>
			<Grid item xs={12} className={classes.grid}>
				<Typography
					variant="subtitle2"
					display="inline"
					className={classes.title}
				>
					email:
				</Typography>
				<Typography variant="subtitle1" display="inline">
					{customer.email}
				</Typography>
			</Grid>
			<Grid item xs={12} className={classes.grid}>
				<Typography
					variant="subtitle2"
					display="inline"
					className={classes.title}
				>
					Phone:
				</Typography>
				<Typography variant="subtitle1" display="inline">
					{customer.phone}
				</Typography>
			</Grid>

			{address && (
				<>
					<Grid item xs={12} className={classes.grid}>
						<Typography
							variant="subtitle2"
							display="inline"
							className={classes.title}
						>
							line 1:
						</Typography>
						<Typography variant="subtitle1" display="inline">
							{address.line1}
						</Typography>
					</Grid>
					<Grid item xs={12} className={classes.grid}>
						<Typography
							variant="subtitle2"
							display="inline"
							className={classes.title}
						>
							line 2:
						</Typography>
						<Typography variant="subtitle1" display="inline">
							{address.line2}
						</Typography>
					</Grid>
					<Grid item xs={12} className={classes.grid}>
						<Typography
							variant="subtitle2"
							display="inline"
							className={classes.title}
						>
							city:
						</Typography>
						<Typography variant="subtitle1" display="inline">
							{address.city}
						</Typography>
					</Grid>
					<Grid item xs={12} className={classes.grid}>
						<Typography
							variant="subtitle2"
							display="inline"
							className={classes.title}
						>
							state:
						</Typography>
						<Typography variant="subtitle1" display="inline">
							{address.state}
						</Typography>
					</Grid>
					<Grid item xs={12} className={classes.grid}>
						<Typography
							variant="subtitle2"
							display="inline"
							className={classes.title}
						>
							zipcode:
						</Typography>
						<Typography variant="subtitle1" display="inline">
							{address.postal_code}
						</Typography>
					</Grid>
				</>
			)}
		</Grid>
	);
};

export default CustomerBilling;
