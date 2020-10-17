import React from 'react';
// material ui
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

const PurchasesList = ({ cart, classes, handleClickOpen, setProduct }) => {
	return (
		<>
			{cart
				.filter((order) => order.type === 'sale')
				.map((product, i) => (
					<ListItem divider className={classes.listItem} key={i}>
						<IconButton
                        onClick={()=> {setProduct(product); handleClickOpen()}}
							size="small"
							aria-label="delete"
							className={classes.deleteIcon}
						>
							<DeleteOutlineOutlinedIcon />
						</IconButton>

						<ListItemText
							className={classes.listItemText}
							primary={product.model}
							classes={{
								primary: classes.modelName,
								secondary: classes.secondary,
							}}
							secondary={'category: ' + product.category}
						/>

						<Typography variant="body2">
							{product.quantity + ' x ' +     (product.price / 100).toFixed(2)}
						</Typography>
					</ListItem>
				))}
		</>
	);
};

export default PurchasesList;
