import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'absolute',
		top: '30px',
		right: '30px',
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
	const [items, 
	//	setItems
	] = React.useState(0);
	

	return (
		<div className={classes.root}>
			<Fab color="primary" variant="extended">
				<ShoppingCartIcon className={classes.extendedIcon} /> MY CART ({items})
			</Fab>
		</div>
	);
}
