import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { CartContext } from '../../context/cart-context';

const useStyles = makeStyles((theme) => ({
	button: {},
}));

const AddToCartButton = ({ id, price, quantity }) => {
	const classes = useStyles();
	const {} = React.useContext(CartContext);

	return <Button className={classes.button}>Add to cart</Button>;
};

export default AddToCartButton;
