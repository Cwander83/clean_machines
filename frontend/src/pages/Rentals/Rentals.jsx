import React from 'react';

import Typography from '@material-ui/core/Typography';
import { Grid, Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SimpleCard from '../../components/SimpleCard/SimpleCard';
import RentalSearch from '../../components/RentalSearch/RentalSearch';
import { RentalContext } from '../../context/rental-context';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	title: {
		// padding: theme.spacing(1),
		textAlign: 'left',
	},
}));

const Rentals = () => {
	const { availableProducts } = React.useContext(RentalContext);

	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Container>
				<Grid container spacing={2}>
					<Grid item xs={12}></Grid>
					<Grid item xs={12}></Grid>
					<Grid item xs={12}>
						<Paper className={classes.paper} elevation={1}>
							<Grid container>
								<Grid item xs={6}>
									<Typography
										variant="h4"
										component="h4"
										className={classes.title}
									>
										Rentals
									</Typography>
								</Grid>
								<Grid item xs={6}>
									<Typography variant="h4" component="h4">
										Rentals
									</Typography>
								</Grid>
							</Grid>
						</Paper>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h4" component="h4">
							<RentalSearch />
						</Typography>
					</Grid>

					{/* where the products to rent will show up */}
					<Grid
						container
						spacing={2}
						direction="row"
						wrap="wrap"
						justify="flex-start"
						alignItems="flex-start"
					>
						<Grid item xs={11} sm={6} md={4}>
							<SimpleCard />
						</Grid>

						<Grid item xs={11} sm={6} md={4}>
							<SimpleCard />
						</Grid>

						<Grid item xs={11} sm={6} md={4}>
							<SimpleCard />
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Rentals;
