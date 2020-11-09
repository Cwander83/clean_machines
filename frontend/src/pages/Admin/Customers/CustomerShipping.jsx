import React, { useEffect, useState, memo, useContext } from 'react';

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
		textTransform: 'capitalize',
	},
	grid: {
		textAlign: 'left',
	},
}));

const CustomerShipping = () => {
	const classes = useStyles1();

	let { customer, shipping = customer.shipping } = useContext(AdminContext);

	const [address, setAddress] = useState(null);
	useEffect(() => {
		if (shipping) {
			let { address } = shipping;
			setAddress(address);
		}
	}, [shipping]);

	return (
		<Grid container spacing={1}>
			{shipping && (
				<>
					<Grid item xs={12} className={classes.grid}>
						<Typography
							variant="subtitle2"
							display="inline"
							className={classes.title}
						>
							shipping name:
						</Typography>
						<Typography variant="subtitle1" display="inline">
							{shipping.name}
						</Typography>
					</Grid>
					<Grid item xs={12} className={classes.grid}>
						<Typography
							variant="subtitle2"
							display="inline"
							className={classes.title}
						>
							phone:
						</Typography>
						<Typography variant="subtitle1" display="inline">
							{shipping.phone}
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
				</>
			)}
		</Grid>
	);
};

export default memo(CustomerShipping);
