import React from 'react';

// material ui
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import IconButton from '@material-ui/core/IconButton';

const RentalsList = ({ cart, classes, handleClickOpen, setProduct }) => {
	return (
		<>
			<Grid item sm={3}></Grid>
			<Grid item xs={12} sm={6}>
				<List
					disablePadding
					aria-labelledby="subheader"
					subheader={
						<ListSubheader
							inset
							component="div"
							id="subheader"
							className={classes.subHeader}
						>
							Rentals
						</ListSubheader>
					}
				>
					{cart
						.filter((order) => order.type === 'rental')
						.map((product, i) => (
							<ListItem divider className={classes.listItem} key={i}>
								<IconButton
									onClick={() => {
										setProduct(product);
										handleClickOpen();
									}}
									size="small"
									aria-label="delete"
									className={classes.deleteIcon}
								>
									<DeleteOutlineOutlinedIcon />
								</IconButton>

								<ListItemText
									className={classes.listItemText}
									classes={{
										primary: classes.modelName,
										secondary: classes.secondary,
									}}
									primary={product.model}
									secondary={
										'rental period: ' +
										product.start_date +
										' to ' +
										product.end_date
									}
								/>
								<Typography variant="body2">
									{(product.price / 100).toFixed(2)}
								</Typography>
							</ListItem>
						))}
				</List>
			</Grid>
			<Grid item sm={3}></Grid>
		</>
	);
};

export default RentalsList;
