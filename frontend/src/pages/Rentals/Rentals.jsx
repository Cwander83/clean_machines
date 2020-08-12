import React from 'react';

import Typography from '@material-ui/core/Typography';
import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SimpleCard from '../../components/SimpleCard/SimpleCard';
import RentalSearch from '../../components/RentalSearch/RentalSearch';
//import { RentalContext } from '../../context/rental-context';

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
	},
	gallery: {
		[theme.breakpoints.down('sm')]: {
			alignContent: 'flex-start',
		},
		
	},
}));

const Rentals = () => {
	//const { availableProducts } = React.useContext(RentalContext);

	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Container>
				<Grid container spacing={2}>
					<Grid item xs={12}></Grid>
					<Grid item xs={12}></Grid>
					<Grid item xs={12}>
						<Grid container justify="center">
							<Grid item xs={6}>
								<Typography
									variant="h4"
									component="h4"
									className={classes.title}
								>
									Rentals
								</Typography>
							</Grid>
						</Grid>
					</Grid>

					<Grid item xs={12}>
						<RentalSearch />
					</Grid>

					{/* where the products to rent will show up */}
					<Grid
						container
						
						spacing={2}
						justify="center"
						className={classes.gallery}
					>
						<Grid item xs={11} sm={6} md={10} >
							<SimpleCard />
						</Grid>

						<Grid item xs={11} sm={6} md={10} >
							<SimpleCard />
						</Grid>

						<Grid item xs={11} sm={6} md={10} >
							<SimpleCard />
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Rentals;
