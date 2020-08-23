import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import { SalesContext } from '../../context/sales-context';
import Typography from '@material-ui/core/Typography';
import  Container  from '@material-ui/core/Container';
//import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	title: {
		color: 'black',
	},
}));

const Sales = () => {
	const classes = useStyles();
	const { availableProducts, getAvailableProducts } = React.useContext(
		SalesContext
	);

	React.useEffect(() => {
		getAvailableProducts();
	}, [getAvailableProducts]);

	console.log(availableProducts);
	return (
		<Container>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography variant="h3" className={classes.title}>
						Sales
					</Typography>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Sales;
