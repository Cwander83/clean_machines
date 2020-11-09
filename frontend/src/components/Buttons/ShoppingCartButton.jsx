import React, { useContext } from 'react';

//react router
import { Link } from 'react-router-dom';

// material ui
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

//context api
import { CartContext } from '../../context/cart-context';

const StyledBadge = withStyles((theme) => ({
	badge: {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: '0 4px',
	},
}))(Badge);

export default function CustomizedBadges() {
	let { cart } = useContext(CartContext);
	return (
		<IconButton aria-label="cart" component={Link} to="/cart">
			<StyledBadge
				badgeContent={cart.length === 0 ? "0" : cart.length}
				color="secondary"
			>
				<ShoppingCartIcon />
			</StyledBadge>
		</IconButton>
	);
}
