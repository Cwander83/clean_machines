import React, { useContext } from 'react';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

// components
import CheckoutStepper from './CheckoutStepper';

// context api
import { CartContext } from '../../context/cart-context';

const useStyles = makeStyles((theme) => ({
	layout: {
		width: 'auto',
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
			width: 600,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		margin: theme.spacing(3),

		padding: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
			marginTop: theme.spacing(6),
			marginBottom: theme.spacing(6),
			padding: theme.spacing(3),
		},
	},
	button: {
		marginTop: '40px',
		padding: '15px 30px',
		letterSpacing: '0.2em',
		color: theme.palette.gold.main,
		backgroundColor: theme.palette.primary.light,
	},
}));

const Checkout = () => {
	const classes = useStyles();
	const { open, handleClickOpen, handleClose } = useContext(CartContext);

	return (
		<React.Fragment>
			<CssBaseline />
			<Button
				variant="contained"
				onClick={handleClickOpen}
				className={classes.button}
			>
				Proceed to checkout
			</Button>
			<Dialog open={open} fullWidth onClose={handleClose}>
				<main className={classes.layout}>
					<Paper className={classes.paper} elevation={0}>
						<CheckoutStepper />
					</Paper>
				</main>
			</Dialog>
		</React.Fragment>
	);
};

export default Checkout;
