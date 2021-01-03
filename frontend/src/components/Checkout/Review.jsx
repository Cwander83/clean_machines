import React, { useEffect, useContext } from 'react';

// ClassNames
import ClassNames from 'classnames';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

// context api
import { CartContext } from '../../context/cart-context';

const useStyles = makeStyles((theme) => ({
	listItem: {
		padding: theme.spacing(1, 0),
	},
	list: { marginBottom: '30px' },

	total: {
		fontWeight: 700,
	},

	title: {
		padding: theme.spacing(2),
		letterSpacing: '.035em',
		textTransform: 'uppercase',
		color: theme.palette.gold.main,
		backgroundColor: theme.palette.primary.light,
		marginBottom: '15px',
	},
	arrowIcon: {
		fontSize: '16px',
		color: theme.palette.gold.main,
	},
	totalItems: {
		paddingLeft: '25%',
	},
	buttons: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
}));

export default function Review({ nextStep, prevStep }) {
	const classes = useStyles();

	const { cart, totals } = useContext(CartContext);

	useEffect(() => {}, []);

	return (
		<React.Fragment>
			<Typography className={classes.title} variant="h6" gutterBottom>
				Order summary
			</Typography>

			<List className={classes.list} disablePadding>
				{cart.map((product, key) => (
					<ListItem className={classes.listItem} key={key}>
						<ListItemText
							primary={product.model}
							secondary={
								product.type === 'sale'
									? product.category
									: `Rental ${product.category}`
							}
						/>
						<Typography variant="body2">
							{product.quantity} x {(product.price / 100).toFixed(2)}
						</Typography>
					</ListItem>
				))}
				<Divider />
				<ListItem className={ClassNames(classes.listItem, classes.totalItems)}>
					<ListItemText primary="Sub Total" />
					<Typography variant="subtitle1" className={classes.total}>
						$ {totals.subTotal}
					</Typography>
				</ListItem>
				<ListItem className={ClassNames(classes.listItem, classes.totalItems)}>
					<ListItemText primary="Tax" />
					<Typography variant="subtitle1" className={classes.total}>
						$ {totals.taxAmount}
					</Typography>
				</ListItem>
				<ListItem className={ClassNames(classes.listItem, classes.totalItems)}>
					<ListItemText primary="Shipping" />
					<Typography variant="subtitle1" className={classes.total}>
						$ {totals.shipping}
					</Typography>
				</ListItem>
				<ListItem className={ClassNames(classes.listItem, classes.totalItems)}>
					<ListItemText primary="Total" />
					<Typography variant="subtitle1" className={classes.total}>
						$ {totals.total}
					</Typography>
				</ListItem>
			</List>
			<Grid container spacing={2} justify="center">
				<Grid item xs={12} className={classes.buttons}>
					<Button color="primary" variant="contained" onClick={prevStep}>
						back
					</Button>
					<Button
						color="primary"
						variant="contained"
						type="submit"
						onClick={nextStep}
						style={{ marginLeft: '10px' }}
					>
						payment <ArrowForwardIcon className={classes.arrowIcon} />
					</Button>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
