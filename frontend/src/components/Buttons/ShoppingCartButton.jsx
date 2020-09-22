import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
	extendedIcon: {
		marginRight: theme.spacing(1),
	},
}));

export default function ShoppingCartButton() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Fab color="primary" variant="extended">
				<ShoppingCartIcon className={classes.extendedIcon} /> MY CART
			</Fab>
		</div>
	);
}
