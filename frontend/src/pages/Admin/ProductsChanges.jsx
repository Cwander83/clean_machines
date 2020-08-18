import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import CreateProduct from './CreateProduct';
import ProductModify from './ProductModify';

const useStyles = makeStyles((theme) => ({
	root: {
		// flexShrink: 0,
		//marginLeft: theme.spacing(2.5),
	},
}));

const ProductChanges = () => {
	const [open, setOpen] = React.useState(false);
	const [state, setState] = React.useState(false);
	const classes = useStyles();
	return (
		<Grid container spacing={2} justify="center" className={classes.root}>
			<Grid item xs={12}>
				<ButtonGroup variant="contained" color="primary">
					<Button
						onClick={() => {
							setOpen(true);
							setState(false);
						}}
					>
						create
					</Button>
					<Button
						onClick={() => {
							setOpen(true);
							setState(true);
						}}
					>
						modify
					</Button>
				</ButtonGroup>
			</Grid>
			{open ? (
				<Grid item xs={12} sm={6} component={Paper}>
					{!state ? <CreateProduct /> : <ProductModify />}
				</Grid>
			) : (
				<></>
			)}
		</Grid>
	);
};

export default ProductChanges;
