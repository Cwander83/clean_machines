import React, { useContext } from 'react';

// material ui
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

// context api
import { CartContext } from '../../context/cart-context';

const DialogRemove = ({ open, handleClose, item }) => {
	
	let { removeFromCart } = useContext(CartContext);

	return (
		<Dialog
			maxWidth="sm"
			open={open}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
		>
			<DialogTitle id="alert-dialog-title">
				{'Are you sure you want to Remove ' + item.model}
			</DialogTitle>

			<DialogActions>
				<Button onClick={handleClose} color="primary">
					Keep
				</Button>
				<Button
					onClick={() => {
						removeFromCart(item);
						handleClose();
					}}
					color="primary"
					autoFocus
				>
					Remove
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default DialogRemove;
