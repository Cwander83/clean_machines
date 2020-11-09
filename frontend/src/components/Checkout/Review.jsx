import React, { useEffect, useContext } from 'react';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// context api
import { CartContext } from '../../context/cart-context';

const products = [
	{ name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
	{ name: 'Product 2', desc: 'Another thing', price: '$3.45' },
	{ name: 'Product 3', desc: 'Something else', price: '$6.51' },
	{ name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
	{ name: 'Deposit', desc: '', price: 'Free' },
];
// const addresses = [
// 	'1 Material-UI Drive',
// 	'Reactville',
// 	'Anytown',
// 	'99999',
// 	'USA',
// ];

const useStyles = makeStyles((theme) => ({
	listItem: {
		padding: theme.spacing(1, 0),
	},
	total: {
		fontWeight: 700,
	},
	title: {
		marginTop: theme.spacing(2),
		textAlign: 'center',
	},
}));

export default function Review({ nextStep, prevStep }) {
	const { user } = useContext(CartContext);

	useEffect(() => {}, []);

	const classes = useStyles();

	return (
		<React.Fragment>
			<Typography variant="h6" gutterBottom>
				Order summary
			</Typography>
			<List disablePadding>
				{products.map((product) => (
					<ListItem className={classes.listItem} key={product.name}>
						<ListItemText primary={product.name} secondary={product.desc} />
						<Typography variant="body2">{product.price}</Typography>
					</ListItem>
				))}
				<ListItem className={classes.listItem}>
					<ListItemText primary="Total" />
					<Typography variant="subtitle1" className={classes.total}>
						$34.06
					</Typography>
				</ListItem>
			</List>
			<Grid container spacing={2} justify="center">
				<Grid item xs={12} sm={6}>
					<Typography variant="h6" gutterBottom className={classes.title}>
						Delivery Address
					</Typography>
					<Typography gutterBottom>
						{user.firstName} {user.lastName}
					</Typography>
					<Typography gutterBottom>
						{user.shipping_line1}
						<br /> {user.shipping_line2}
						<br />
						{user.shipping_city} {user.shipping_state}{' '}
						{user.shipping_postal_code}
					</Typography>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Typography variant="h6" gutterBottom className={classes.title}>
						Shipping Address
					</Typography>
					<Typography gutterBottom>
						{user.firstName} {user.lastName}
					</Typography>
					<Typography gutterBottom>
						{user.shipping_line1}
						<br /> {user.shipping_line2}
						<br />
						{user.shipping_city} {user.shipping_state}{' '}
						{user.shipping_postal_code}
					</Typography>
				</Grid>
				<Grid item xs={12}>
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
						payment
					</Button>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
