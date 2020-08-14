import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import CreateProduct from './CreateProduct';
import Container from '@material-ui/core/Container';




function getModalStyle() {
	const top = 50 ;
	const left = 50 ;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

const useStyles = makeStyles((theme) => ({
	modal: {
		position: 'absolute',
		
		
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		
		padding: theme.spacing(2, 4, 3),
	},
}));

const CreateProductModal = () => {
	const classes = useStyles();
	// getModalStyle is not a pure function, we roll the style only on the first render
	const [modalStyle] = React.useState(getModalStyle);
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const body = (
		<Container maxWidth="md" style={modalStyle} className={classes.modal}>
			<CreateProduct />
		</Container>
	);

	return (
		<div>
			<button type="button" onClick={handleOpen}>
				Open Modal
			</button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				{body}
			</Modal>
		</div>
	);
};

export default CreateProductModal;
