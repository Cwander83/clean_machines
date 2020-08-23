import React from 'react';


import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const DialogRental = ({open,handleClose}) => {
	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title">
				{"Use Google's location service?"}
			</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">
					so you what to rent this unit... how many do you want.
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color="primary">
					Disagree
				</Button>
				<Button onClick={handleClose} color="primary" autoFocus>
					Agree
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default DialogRental;
